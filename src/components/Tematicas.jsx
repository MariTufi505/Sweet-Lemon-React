import EmblaCarousel from './EmblaCarousel'
import '/src/base.css'
import '/src/embla.css'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Tematicas = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-auto mb-15">
        <div className="bg-pink-400 w-full sm:w-11/12 lg:w-3/4 rounded-lg mt-2 mx-auto p-3 sm:p-4">
          <p className="text-white text-center font-light text-4xl mb-5">
            Temáticas
          </p>

          <div className="bg-orange-400 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-black text-center bg-amber-600 w-1/2 text-2xl rounded-xl hover:bg-black hover:text-orange-500 ">
                Halloween
              </p>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          <div className="bg-red-500 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-white text-center bg-red-600 w-1/2 text-2xl rounded-xl hover:bg-green-500 hover:text-white border border-green-700">
                Navidad
              </p>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          <div className="bg-pink-300 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-white text-center bg-pink-600 w-1/2 text-2xl rounded-xl hover:bg-pink-300 hover:text-pink-800 border border-pink-700">
                San Valentín
              </p>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          <div className="bg-violet-400 rounded-3xl p-3 m-8">
            <div className="flex justify-center mt-5 mb-8">
              <p className="text-white text-center bg-violet-600 w-1/2 text-2xl rounded-xl hover:bg-blue-500 hover:text-white border border-gray-700">
                Tendencias
              </p>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tematicas
