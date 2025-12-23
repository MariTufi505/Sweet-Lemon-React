import React, { useState } from 'react'
import Tendencias1 from '../assets/Tendencias-1.jpg'
import Tendencias2 from '../assets/Tendencias-2.jpg'
import Tendencias3 from '../assets/Tendencias-3.jpg'
import Tendencias4 from '../assets/Tendencias-4.jpg'
import Tendencias5 from '../assets/Tendencias-5.jpg'


const CarruselTendencias = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Torta de Half-Life',
      description:
        'Cajita con diferentes galletitas decoradas con diferentes rellenos',
      image: Tendencias1
    },
    {
      id: 2,
      title: 'Galletitas de One Piece',
      description:
        'Torta rellena con dulce de leche y decorada con corazones de mazapán',
      image: Tendencias2
    },
    {
      id: 3,
      title: 'Galletita Gordo Bachicha',
      description: 'Cupcakes decorados con colores de San Valentín',
      image: Tendencias3
    },
    {
      id: 3,
      title: 'Torta Pikmin',
      description: 'Cupcakes decorados con colores de San Valentín',
      image: Tendencias4
    },
    {
      id: 3,
      title: 'Torta Kitty-Mamadísima',
      description: 'Cupcakes decorados con colores de San Valentín',
      image: Tendencias5
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
      <div className="w-full max-w-4xl bg-white rounded-3xl">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-300 rounded-lg text-white py-8 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Tendencias</h2>
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
              className="bg-gradient-to-r from-yellow-400 to-orange-300 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
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
                      ? 'bg-yellow-300 w-8 h-3'
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-yellow-400 to-orange-300 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
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

export default CarruselTendencias