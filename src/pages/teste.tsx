import { GetStaticProps } from "next";

export function Teste(props : any){
    return <h1>teste aqui</h1>
}

export const getStaticProps:GetStaticProps = async() => {
    return(
        <></>
    )
}