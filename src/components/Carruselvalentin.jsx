import React, { useState } from 'react'

const Carrouselvalentin = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides= [
    {
      id: 1,
      title: 'Cajita personalizada de San Valentín',
      description:
        'Cajita con diferentes galletitas decoradas con diferentes rellenos',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Torta "Te Amo"',
      description:
        'Torta rellena con dulce de leche y decorada con corazones de mazapán',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Cupcakes románticos',
      description:
        'Cupcakes decorados con colores de San Valentín',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
    },
    
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
      <div className="w-full max-w-4xl bg-red-100 rounded-3xl">
        <div className="bg-gradient-to-r from-pink-600 to-red-300 rounded-lg text-white py-8 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">San Valentín</h2>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-600">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="bg-gradient-to-r from-pink-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
              aria-label="Anterior"
            >
              ‹
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-red-600 w-8 h-3'
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-pink-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
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

export default Carrouselvalentin
