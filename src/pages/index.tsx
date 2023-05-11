import Button from "@/components/button";
import { Search } from "@/components/search";
import { SideList } from "@/components/sideList";
import { Title } from "@/components/title";
import { useSideMenu } from "@/context/sideMenuContext";
import Image from "next/image";
import { userAgentFromString } from "next/server";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import nookie from 'nookies'

export default function Home() {
  const { data, getWatherData, loading, clearWethwerDta } = useSideMenu()
  const [teste, setTeste] = useState(false);
  const router = useRouter()

  function redirectPage() {
    router.push('/playlist')
  }

  // useEffect(() => {
  //   console.log(data.playlist.length)
  //   console.log(data)
  // }, [data])


  function saveListInCookie(){
    nookie.set(null, 'playlist', JSON.stringify(data))
    alert('Playlist salva!!')
  }


  const showSideList = Boolean(data.playlist.length)

  return (
    <div className={`
       w-full     
       bg-gray-700   
        ${showSideList && 'md:flex md:flex-row md:pt-0 md:px-0'}
        `}
    >
      <div className="
        flex-1
        px-4 
        md:px-[44px] 
        lg:px-[90px]
        pt-[29px]">

        <div className={` ${data.playlist.length ? 'hidden md:block md:px-[10px]' : ''}
            w-full md:max-w-[114px]`}>
          <Button
            label="minha playlist" onClick={redirectPage} error={teste}
          />
        </div>
        <div className={`${data.playlist.length ? 'hidden md:block md:px-[10px] ' : 'md:px-[80px] lg:px-[150px] '} 
             w-full flex flex-col gap-16 mt-16`}>
          <Title
            title={'PLAYLIST DA MINHA CIDADE'}
            subTitle={'Bem vindo, vamos buscar qual playlist ideal pra sua cidade'}
          />
          <Search loading={loading} onSearch={getWatherData} />
          <div className={`${showSideList ?'md:mt-[-100px]':'md:mt-[-160px]'}  m-auto mt-[-120px] pointer-events-none`}>
            <Image src={'Music.svg'}
              alt='Imagem de musica'
              width={579}
              height={579}
            />
          </div>
        </div>
      </div>

      {showSideList && <SideList {...data} onSaveList={saveListInCookie} onPress={clearWethwerDta} />}

    </div>
  )
}
