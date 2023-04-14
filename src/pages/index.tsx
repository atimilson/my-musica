import Button from "@/components/button";
import { Search } from "@/components/search";
import { Title } from "@/components/title";
import { useState } from "react";

export default function Home() {
  const [teste,setTeste] = useState(false)
  function redirectPage() {
    alert('ir para outra pagina')
  }
  return (
    <>
      <Button label="minha playlist"  onClick={() => setTeste(!teste)} error={teste}/>
      <Title 
         title={'PLAYLIST DA MINHA CIDADE'} 
         subTitle={'Bem vindo, vamos buscar qual playlist ideal pra sua cidade'} 
      />
      <Search />
    </>
  )
}
