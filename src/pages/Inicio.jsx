import ScrollToTop from "../components/ArrowTop"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Navbar from "../components/Navbar"
import Productos from "../components/Productos"
import Tematicas from "../components/Tematicas"


const Inicio = () => {
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

export default Inicio