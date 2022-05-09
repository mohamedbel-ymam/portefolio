import React from 'react'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import Intro from '../intro/intro'
import Portfolio from '../portefolio/portefolio'
import Services from '../services/services'

function Home() {
  return (
      <div className=''>
    <Intro/>
    <Services/>
    <Portfolio/>
    <Contact/>
    
    </div>
  )
}

export default Home