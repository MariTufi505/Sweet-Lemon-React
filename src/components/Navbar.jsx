const Navbar = () => {
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 200) 
  }
  return (
    <div className="p-5">
      <div className="bg-rosa-suave m-auto md:rounded-full rounded-4xl flex md:w-1/2 w-full justify-center items-center transition-transform  font-Italianno border border-borde-navbar">
        <p
          onClick={() => scrollToSection('Productos')}
          className="text-white p-3 cursor-pointer hover:bg-rose-400 m-4 hover:rounded-full md:ml-2"
        >
          Mis productos
        </p>
        <p
          onClick={() => scrollToSection('Tematicas')}
          className="text-white p-3 cursor-pointer  hover:bg-rose-400 m-4 hover:rounded-full ml-2 "
        >
          Temáticas
        </p>
        <p
          onClick={() => scrollToSection('Contacto')}
          className="text-white p-3 cursor-pointer  hover:bg-rose-400 m-4 hover:rounded-full ml-2 "
        >
          Contacto
        </p>
      </div>
    </div>
  )
}

export default Navbar