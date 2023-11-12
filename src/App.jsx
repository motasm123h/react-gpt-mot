import React from 'react'
import { Footer, Blog, Possibility, Feature, Header, WhatGPT3 } from './containers';
import { CTA, Brand, NavBar } from './components'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div >
  )
}

export default App
