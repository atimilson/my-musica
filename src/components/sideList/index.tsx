import Button, { Variants } from "../button";




export function SideList(){
    return(
        <>
          <div className=" flex flex-1 bg-primary">
             <Button variant={Variants.Danger} label="fechar" onClick={()=> console.log('teste')} />

             <h1 className="text-white "> BUSQUE A CIDADE E AQUI VAI 
              <strong>TESTE</strong>
             </h1>
          </div>
        </>
    )
}