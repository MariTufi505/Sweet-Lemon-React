import React from 'react'
import githublogo from '../assets/icons8-github-100.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="bg-orange-200 mt-7 w-full">
      <p className="text-gray-500 text-center p-5">
        Página web creada por Marilyn Tufillaro para el emprendimiento Sweet
        Lemon.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-6">
        <a
          href="https://github.com/MariTufi505"
          target="_blank"
          rel="Icono a GitHub"
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-gray-700 transition"
        >
          <img src={githublogo} alt="GitHub" className="w-8 md:w-12 h-auto" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mptufillaro/"
          target="_blank"
          rel="Icono a LinkedIN"
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-gray-700 transition"
        >
          <img src={linkedin} alt="LinkedIn" className="w-8 md:w-12 h-auto" />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
