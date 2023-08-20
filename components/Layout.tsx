import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 100%;
  padding: 24px;
`


type LayoutPropsType = {
  children: React.ReactNode,
  className: any
}

const Layout = ({children, className} : LayoutPropsType) => {
  return (
    <StyledLayout className={className}>
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
    </StyledLayout>
  )
}

export default Layout