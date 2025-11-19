import React from 'react'

const Tematicas = () => {
  return (
    <>
      <div className="bg-orange-400 w-5/6 rounded-lg  mx-auto p-4">
        <p className="text-white text-center font-light text-4xl mb-5">
          Temáticas
        </p>
        <div className="flex justify-center mt-5 mb-8">
          <p className="text-black text-center bg-amber-600 w-1/2 text-2xl rounded-xl hover:bg-black hover:text-orange-500 border border-amber-700">
            Halloween
          </p>
        </div>

        <div className="flex justify-center mt-5 mb-8">
          <p className="text-white text-center bg-red-600 w-1/2 text-2xl rounded-xl hover:bg-green-500 hover:text-white border border-green-700">
            Navidad
          </p>
        </div>

        <div className="flex justify-center mt-5 mb-8">
          <p className="text-white text-center bg-pink-600 w-1/2 text-2xl rounded-xl hover:bg-pink-300 hover:text-pink-800 border border-pink-700">
            San Valentín
          </p>
        </div>
        <div className="flex justify-center mt-5 mb-8">
          <p className="text-white text-center bg-violet-600 w-1/2 text-2xl rounded-xl hover:bg-blue-500 hover:text-white border border-gray-700">
            Cultura Pop
          </p>
        </div>
      </div>
    </>
  );
}

export default Tematicas