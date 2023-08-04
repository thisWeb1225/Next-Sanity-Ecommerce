import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

type LayoutPropsType = {
  children: React.ReactNode,
  className: any
}

const Layout = ({children, className} : LayoutPropsType) => {
  return (
    <div className={`layout ${className}`}>
      <Head>
        <title>Speak Sells</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout