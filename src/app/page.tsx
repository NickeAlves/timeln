"use client";

import Countdown from "./components/Countdown";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className=" flex flex-col gap-6 justify-center items-center">
      <Carousel />
      <Countdown />
      <div className="pr-12 pl-12 w-full max-w-4xl mx-auto py-8 rounded-lg shadow-2xl">
        <p>
          ~❤️‍🔥 <br></br> <br></br>
        </p>
        <p>
          Logo estaremos juntos novamente, sabendo que estamos lutando pelo
          mesmo objetivo. Desde o dia em que te vi pela primeira vez, soube que
          havia encontrado a mulher dos meus sonhos. Com o tempo, essa certeza
          só se fortaleceu, e hoje, com toda a convicção do mundo, sei que estou
          ao lado de uma mulher incrível, que me faz me apaixonar todos os dias
          por cada detalhe seu. <br></br> <br></br>
        </p>
        <p>
          Eu te amo mais do que tudo na minha vida, meu amor. Estou contando
          cada segundo até o momento em que nos reencontraremos. Cada instante
          longe de você só aumenta minha certeza de que você é a pessoa com quem
          quero passar o resto dos meus dias.
        </p>
      </div>
    </div>
  );
}
