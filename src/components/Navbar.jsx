const Navbar = () => {
  return (
    <div className="p-5">
      <div className="bg-rosa-suave m-auto md:rounded-full rounded-4xl flex md:w-1/2 w-full justify-center items-center font-light transition-transform  font-serif border border-borde-navbar">
        <p className="text-white p-5 cursor-pointer hover:bg-rose-300 hover:rounded-full md:ml-2">
          Mis productos
        </p>
        <p className="text-white p-5 cursor-pointer  hover:bg-rose-300 hover:rounded-full ml-2 ">
          Temáticas
        </p>
        <p className="text-white p-5 cursor-pointer  hover:bg-rose-300 hover:rounded-full ml-2 ">
          Contacto
        </p>
      </div>
    </div>
  )
}

export default Navbar