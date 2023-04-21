import Button from "@/components/button";
import { Search } from "@/components/search";
import { Title } from "@/components/title";
import { useSideMenu } from "@/context/sideMenuContext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const {data , getWatherData, loading} = useSideMenu()
  const [teste, setTeste] = useState(false)
  function redirectPage() {
    alert('ir para outra pagina')
  }
  return (
    <>
      <div className="w-full md:max-w-[114px]">
        <Button
          label="minha playlist" onClick={() => setTeste(!teste)} error={teste}
        />
      </div>
      <div className="w-full flex flex-col gap-16 md:px-[80px] lg:px-[150px] mt-16">
        <Title
          title={'PLAYLIST DA MINHA CIDADE'}
          subTitle={'Bem vindo, vamos buscar qual playlist ideal pra sua cidade'}
        />
        <Search onSearch={getWatherData}/>
        <div className="m-auto mt-[-130px] md:mt-[-160px] pointer-events-none">
          <Image src={'Music.svg'}
            alt='Imagem de musica'
            width={579}
            height={579}
          />
        </div>
      </div>

    </>
  )
}
