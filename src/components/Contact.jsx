import Instagram from "../assets/instagram"
import Whatsapp from "../assets/whatsapp.png"

const Contact = () => {
  return (
    <div
      id="Contacto"
      className=" shadow-2xl bg-amber-900 h-auto w-full md:w-3/4 mx-auto p-3 font-extralight rounded-3xl"
    >
      <div className="rounded-3xl md:w-1/2 text-center mx-auto text-white bg-amber-800 p-5">
        <p className="text-3xl md:text-2xl italic">Mi Contacto</p>
      </div>
      <hr className="border border-amber-50 my-5" />
      <div className="text-center m-5">
        <p className="text-center text-white italic text-3xl">
          ¡Puedes seguirme en mi Instagram, donde publico mis trabajos más
          recientes y tomo pedidos! <br /> ¡También tomo pedidos por WhatsApp!{' '}
          <br />
          ¡Muchas Gracias!
        </p>
        <div className="mx-auto w-full h-full flex items-center justify-center my-5">
          <a
            href="https://www.instagram.com/sweet_.lemonn/#"
            target="_blank"
            className="cursor-pointer"
            alt="Icono de Instagram"
          >
            <Instagram />
          </a>
          <p className="text-center cursor-pointer text-white italic text-3xl">
            <a href="https://www.instagram.com/sweet_.lemonn/#" target="_blank">
              Sweet_.Lemonn
            </a>
          </p>
        </div>
        <div className="mx-auto w-full h-full flex items-center justify-center my-5">
          <a
            href="https://wa.me/+5491128584132"
            target="_blank"
            className="cursor-pointer"
            alt="Icono de Instagram"
          >
            <img src={Whatsapp} alt="" className="w-10 h-10" />
          </a>
          <p className="text-center cursor-pointer text-white italic text-3xl">
            <a href="https://wa.me/+5491128584132" target="_blank">
              ¡Chatea conmigo!
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
