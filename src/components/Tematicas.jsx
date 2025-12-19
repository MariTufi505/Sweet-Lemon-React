import CarouselHalloween from './Carruselhalloween'
import Carrouselvalentin from './Carruselvalentin'

const Tematicas = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-auto mb-15">
        <div className="bg-pink-300 w-full sm:w-11/12 lg:w-3/4 rounded-lg mt-2 mx-auto p-3 sm:p-4">
          <p className="text-white text-center font-light text-4xl mb-5">
            Temáticas
          </p>

          <div className="bg-orange-200 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-black text-center bg-orange-300 w-1/2 text-2xl rounded-xl hover:bg-black hover:text-orange-500 ">
                Halloween
              </p>
            </div>
           <CarouselHalloween />
          </div>

          <div className="bg-red-200 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-black text-center bg-green-300 w-1/2 text-2xl rounded-xl hover:bg-green-500 hover:text-white  ">
                Navidad
              </p>
            </div>
            
          </div>

          <div className="bg-pink-200 rounded-3xl p-5 m-3">
        
            <Carrouselvalentin />
          </div>

          <div className="bg-violet-400 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-white text-center bg-violet-600 w-1/2 text-2xl rounded-xl hover:bg-blue-500 hover:text-white border border-gray-700">
                Tendencias
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Tematicas
