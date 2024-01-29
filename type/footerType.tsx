type footerBannerType = {
  _id: string,
  title: string,
  desc?: string,
  image: {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
}[]

export default footerBannerType