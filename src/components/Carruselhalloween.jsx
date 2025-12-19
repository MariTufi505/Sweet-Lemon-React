import React, { useState } from 'react'

const CarouselHalloween = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides= [
    {
      id: 1,
      title: 'Tecnología e Innovación',
      description:
        'Exploramos las últimas tendencias en desarrollo tecnológico, inteligencia artificial y transformación digital. Ayudamos a empresas a adaptarse al futuro con soluciones innovadoras y escalables.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Estrategia de Negocios',
      description:
        'Desarrollamos estrategias comerciales efectivas que impulsan el crecimiento sostenible. Nuestro enfoque combina análisis de mercado con metodologías ágiles para maximizar resultados.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Diseño y Creatividad',
      description:
        'Creamos experiencias visuales impactantes que conectan con tu audiencia. Desde branding hasta interfaces digitales, cada diseño cuenta una historia única.',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Marketing Digital',
      description:
        'Potenciamos tu presencia online con estrategias de marketing basadas en datos. Aumentamos tu visibilidad, engagement y conversiones en todos los canales digitales.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
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
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
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
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
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
                      ? 'bg-purple-600 w-8 h-3'
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
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
