import CarouselHalloween from './Carruselhalloween'
import CarruselNavidad from './CarruselNavidad'
import CarruselTendencias from './CarruselTendencias'
import Carrouselvalentin from './Carruselvalentin'

const Tematicas = () => {
  return (
    <>
      <div id="Tematicas" className="flex flex-col items-center w-full h-auto mb-15">

        <p className="text-amber-600 text-center font-extralight text-4xl p-5 bg-white mb-5 rounded-4xl">
          Temáticas
        </p>

        <div className="bg-gradient-to-br from-pink-200 to-rose-300 w-full sm:w-11/12 lg:w-3/4 rounded-lg mt-2 mx-2 p-1 sm:p-4 shadow-2xl">
          <CarouselHalloween />
          <CarruselNavidad />
          <Carrouselvalentin />
          <CarruselTendencias />
        </div>
      </div>
    </>
  )
}

export default Tematicas
