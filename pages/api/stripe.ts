import { ProductType } from '@/type/productType';
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// This is your test secret API key.
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Stripe.Event>) {
  if (req.method === 'POST') {
    const buyedCartItems: ProductType[] = req.body;

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: buyedCartItems.map(item => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/ajgkzenq/production/').replace('-webp', '.webp');
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });

      res.status(200).json(session)
    
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}