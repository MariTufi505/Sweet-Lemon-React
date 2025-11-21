
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import SobreMi from './components/SobreMi'
import Tematicas from './components/Tematicas'

const App = () => {
  return (
    <div className="bg-pink-300">
      <Navbar />
      <HeroBanner />
      <Productos />
      <Tematicas />
      <SobreMi />
      <Footer />
    </div>
  )
}

export default App