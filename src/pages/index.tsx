import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [teste,setTeste] = useState(false)
  function redirectPage() {
    alert('ir para outra pagina')
  }
  return (
    <>
      <Button label="teste"  onClick={() => setTeste(!teste)} error={teste}/>
    </>
  )
}
