

const Productos = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto mb-15">
      <div className="w-full sm:w-11/12 lg:w-3/4 rounded-lg mt-2 mx-auto p-3 sm:p-4">
        <h1 className="mt-6 sm:mt-10 flex justify-center italic  bg-rosa-suave w-1/2 m-auto p-4 border border-gray-400 rounded-full text-white text-2xl sm:text-3xl font-serif mb-8 sm:mb-15 px-4">
          Mis Productos
        </h1>

        <div className="bg-gradient-to-br from-pink-100 to-rose-300 rounded-lg flex flex-col space-y-4 sm:space-y-6">
          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-3xl sm:text-5xl font-extralight ">Tortas</p>
          </div>
          {/* ---------------- Tortas  ----------------*/}
          {/* ---------------- 1ra y 2da  ----------------*/}
          <div className="flex flex-col sm:flex-row p-9 justify-start mx-3 my-5">
            <img
              src="/_ref/_img/torta1.jpg"
              alt="Imagen de Torta"
              className="w-full h-48 sm:w-1/2  sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              ¡Esta torta la he realizado con mucha paciencia y preocupación en
              los colores! Personalmente me gustó mucho el color rosita. Por
              dentro tiene un relleno de dulce de leche, con un bizcochuelo de
              vainilla.
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end p-9 mx-3 my-5">
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-br-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo a la primera.
              Pero luego de varios intentos, pude realizarla.
            </p>
            <img
              src="/_ref/_img/torta2.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none"
            />
          </div>
          {/* ---------------- 3ra y 4ta   ----------------*/}
          <div className="flex flex-col sm:flex-row justify-start p-9 mx-3 my-5">
            <img
              src="/_ref/_img/torta3.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end p-9 mx-3 my-5">
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-br-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
            <img
              src="/_ref/_img/torta4.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none"
            />
          </div>

          {/* ---------------- Cookies  ----------------*/}

          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-3xl sm:text-5xl font-extralight ">Cookies</p>
          </div>

          {/* ---------------- 1ra y 2da  ----------------*/}
          <div className="flex flex-col sm:flex-row justify-start p-9 mx-3 my-5">
            <img
              src="/_ref/_img/cookie1.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
          </div>

          {/* ----------------  Pan Dulce ----------------*/}
          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-3xl sm:text-5xl font-extralight ">Pan Dulce</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-start p-5 mx-3 my-5">
            <img
              src="/_ref/_img/pandulce1.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end p-5 mx-3 my-5">
            <p className="text-base sm:text-4xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-br-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
            <img
              src="/_ref/_img/pandulce2.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Productos;