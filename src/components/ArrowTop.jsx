import React from 'react'
import Arrow from '../assets/right-arrow.svg'

const ScrollToTop = () => {

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-rose-400 hover:bg-rose-300 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
    >
      <img src={Arrow} alt="Volver arriba" className="w-6 h-6 -rotate-90" />
    </button>
  )
}

export default ScrollToTop