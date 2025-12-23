
import Contact from './components/Contact'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Tematicas from './components/Tematicas'
import './index.css'
import ScrollToTop from './components/ArrowTop' 
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="bg-rosita-claro font-extralight ">
        <Navbar />
        <HeroBanner />
        <Productos />
        <Tematicas />
        <Contact />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  )
}

export default App