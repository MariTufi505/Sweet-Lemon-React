import React from 'react'

const SobreMi = () => {
  return (
    <div className="flex justify-center">
          <div className="bg-blue-300 p-2 h-full w-3/4 m-5 rounded-2xl border-white">
            <p className='flex justify-center text-white mt-5 text-2xl'>Sobre Mi</p>
            <p className='flex justify-center p-10 text-white italic'>
              ¡Hola! mi nombre es Agus! Te agradezco mucho visitar mi página web. Me gusta mucho cocinar, intentar cosas nuevas y los gatos. Tengo una gatita llamada Capuchino. Le gusta dormir y robar el pan.
            </p>
           <img src="/_ref/_img/capuchino1.jpg" alt="" className='p-5 rounded-4xl w-full'/>
          </div>
        </div>
  )
}

export default SobreMi