import React, { useState } from 'react'
import Halloween1 from '../assets/Halloween-1.jpg'
import Halloween2 from '../assets/Halloween-2.jpg'
import Halloween3 from '../assets/Halloween-3.jpg'
import Halloween4 from '../assets/Halloween-4.jpg'
import Halloween5 from '../assets/Halloween-5.jpg'

const CarouselHalloween = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides= [
    {
      id: 1,
      title: 'Pompompurin Brujito',
      description:
        'Exploramos las últimas tendencias en desarrollo tecnológico, inteligencia artificial y transformación digital. Ayudamos a empresas a adaptarse al futuro con soluciones innovadoras y escalables.',
      image:
        Halloween1
    },
    {
      id: 2,
      title: 'Cuchillas de Fondant',
      description:
        'Desarrollamos estrategias comerciales efectivas que impulsan el crecimiento sostenible. Nuestro enfoque combina análisis de mercado con metodologías ágiles para maximizar resultados.',
      image:
        Halloween2
    },
    {
      id: 3,
      title: 'Kit Asustadizo',
      description:
        'Creamos experiencias visuales impactantes que conectan con tu audiencia. Desde branding hasta interfaces digitales, cada diseño cuenta una historia única.',
      image:
        Halloween3
    },
    {
      id: 4,
      title: 'Kit de Scream',
      description:
        'Potenciamos tu presencia online con estrategias de marketing basadas en datos. Aumentamos tu visibilidad, engagement y conversiones en todos los canales digitales.',
      image:
       Halloween4
    },
    {
      id: 5,
      title: 'Brownies de Momias',
      description:
        'Potenciamos tu presencia online con estrategias de marketing basadas en datos. Aumentamos tu visibilidad, engagement y conversiones en todos los canales digitales.',
      image:
       Halloween5
    }
  ]



  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-100 rounded-3xl">
        <div className="bg-gradient-to-r from-orange-600 to-orange-300 rounded-lg text-white py-8 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Halloween</h2>
        </div>

        <div className="p-8 md:p-12">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 block'
                    : 'opacity-0 hidden'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="bg-gradient-to-r from-orange-600 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-orange-600 w-8 h-3'
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-orange-600 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselHalloween
