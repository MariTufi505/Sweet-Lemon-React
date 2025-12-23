
import Contact from './components/Contact'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Tematicas from './components/Tematicas'
import './index.css'
import ScrollToTop from './components/ArrowTop' 

const App = () => {
  return (
    <>
      <div className="bg-rosita-claro font-Italianno">
        <Navbar />
        <HeroBanner />
        <Productos />
        <Tematicas />
        <Contact />
        <ScrollToTop />

      </div>
    </>
  )
}

export default App