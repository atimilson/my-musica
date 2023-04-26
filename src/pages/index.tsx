import Button from "@/components/button";
import { Search } from "@/components/search";
import { SideList } from "@/components/sideList";
import { Title } from "@/components/title";
import { useSideMenu } from "@/context/sideMenuContext";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import { useState, useEffect } from "react";

export default function Home() {
  const {data , getWatherData, loading} = useSideMenu()
  const [teste, setTeste] = useState(false)
  function redirectPage() {
    alert('ir para outra pagina')
  }

  useEffect(()=>{
    console.log(data.playlist.length)
    console.log(data)
  },[data])




  return (
    <>
      <div className={` ${data.playlist.length ? 'hidden' : ''} w-full md:max-w-[114px]`}>
        <Button
          label="minha playlist" onClick={() => setTeste(!teste)} error={teste}
        />
      </div>
      <div className={`${data.playlist.length ? 'hidden' : ''} w-full flex flex-col gap-16 md:px-[80px] lg:px-[150px] mt-16`}>
        <Title
          title={'PLAYLIST DA MINHA CIDADE'}
          subTitle={'Bem vindo, vamos buscar qual playlist ideal pra sua cidade'}
        />
        <Search  loading={loading} onSearch={getWatherData}/>
        <div className="m-auto mt-[-130px] md:mt-[-160px] pointer-events-none">
          <Image src={'Music.svg'}
            alt='Imagem de musica'
            width={579}
            height={579}
          />
        </div>
      </div>
      
      <div className="flex"></div>
      <SideList />

    </>
  )
}
