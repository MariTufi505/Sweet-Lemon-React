
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Tematicas from './components/Tematicas'
import './index.css'

const App = () => {
  return (
    <>
      <div className="bg-rosita-claro">
        <Navbar />
        <HeroBanner />
        <Productos />
        <Tematicas />
        <Footer />
      </div>
    </>
  )
}

export default App