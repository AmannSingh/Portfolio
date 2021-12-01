import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'


export const Layout = ({children}) => {
  return (
    <Container>
      <head> 
        <meta property="og:image" content="/images/img2.png" />

        <meta property="og:description" content="third year software engineering student looking for co-op opportunites to test my strengths in the field while developing new skills and knowledge." />

        <meta property="og:url"content="https://amannsingh.netlify.app/" />

        <meta property="og:title" content="Amann Singh Portfolio" />
      </head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
