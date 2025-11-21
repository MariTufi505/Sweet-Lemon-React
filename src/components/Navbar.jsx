const Navbar = () => {
  return (
    <div className="bg-pink-400 flex py-5 px-2 font-light transition-transform w-screen font-serif">
      <p className="text-white p-3 cursor-pointer hover:bg-pink-600 :hover: rounded-lg ml-2">
        Mis productos
      </p>
      <p className="text-white p-3 cursor-pointer  hover:bg-pink-600 :hover: rounded-lg ml-2">
        Temáticas
      </p>
      <p className="text-white p-3 cursor-pointer  hover:bg-pink-600 :hover: rounded-lg">
        Sobre mi
      </p>
    </div>
  );
}

export default Navbar