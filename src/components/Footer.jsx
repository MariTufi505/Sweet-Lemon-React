import Instagram from "../img/instagram"

const Footer = () => {
  return (
    <div className=" bg-amber-900 p-10 h-90 w-full font-extralight">
      <div className="flex justify-center">
        <p className="text-center p-3 text-white italic text-4xl">
          ¡Puedes segurime en Instagram! Publico mis trabajos más recientes y
          por este medio:
        </p>
        <div className="cursor-pointer m-3 ">
          <Instagram />
        </div>
      </div>
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque ea, temporibus voluptatibus tempora officia qui repellendus nulla laborum saepe expedita in tempore maiores, voluptatum, neque voluptate obcaecati incidunt sapiente!</p>
      </div>
    </div>
  )
}

export default Footer
