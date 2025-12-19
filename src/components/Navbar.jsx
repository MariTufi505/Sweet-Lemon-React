const Navbar = () => {
  return (
    <div className="p-5">
    <div className="bg-rosa-suave m-auto rounded-full flex w-1/2 justify-center font-light transition-transform  font-serif border border-borde-navbar">
      <p className="text-white p-5 cursor-pointer hover:bg-rose-300 hover:rounded-full ml-2">
        Mis productos
      </p>
      <p className="text-white p-5 cursor-pointer  hover:bg-rose-300 hover:rounded-full ml-2 ">
        Temáticas
      </p>
    </div>
    </div>
  )
}

export default Navbar