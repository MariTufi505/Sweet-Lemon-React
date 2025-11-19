import React from 'react'

const Productos = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto mb-15">
      <div className="bg-amber-100 w-full sm:w-11/12 lg:w-3/4 rounded-lg mt-2 mx-auto p-3 sm:p-4">
        <h1 className="mt-6 sm:mt-10 flex justify-center text-black text-2xl sm:text-3xl font-serif mb-8 sm:mb-15 px-4">
          Mis Productos
        </h1>

        <div className="flex flex-col space-y-4 sm:space-y-6">
          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-lg sm:text-xl font-medium">Tortas</p>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-start">
            <img
              src="/_ref/_img/ref-1.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
          </div>

          
          <div className="flex flex-col-reverse sm:flex-row justify-end">
            <p className="text-base sm:text-xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-br-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
            <img
              src="/_ref/_img/ref-1.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none"
            />
          </div>

          {/* Tercera tarjeta - imagen izquierda */}
          <div className="flex flex-col sm:flex-row justify-start">
            <img
              src="/_ref/_img/ref-1.jpg"
              alt="Imagen de Torta"
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
            />
            <p className="text-base sm:text-xl p-6 sm:p-10 flex items-center font-light bg-amber-50 rounded-b-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none">
              He realizado esta torta para una clienta muy especial! Fue una
              torta muy difícil porque no sabía cómo realizarlo
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-lg sm:text-xl font-medium">Cookies</p>
          </div>

          <div className="bg-amber-50 p-4 rounded-md flex justify-center">
            <p className="text-lg sm:text-xl font-medium">Tortitas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;