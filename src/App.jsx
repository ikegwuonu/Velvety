import React from 'react'
import './scss/main.css'
import Header from './components/Header'
import Inspiration from './components/Inspiration'
import Products from './components/Products'
import About from './components/About'
import Logos from './components/Logos'
import Processing from './components/Processing'
import Skincare from './components/Skincare'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Program from './components/Program'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Inspiration/>
      <Products/>
      <About/>
      <Logos/>
      <Processing/>
      <Skincare/>
      <Service/>
      <Testimonials/>
      <Program/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App