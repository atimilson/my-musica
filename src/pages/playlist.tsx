import { useEffect } from "react"
import nookie from 'nookies'
import { GetServerSideProps } from 'next'
import { Align, Title } from "@/components/title"
import { FiChevronLeft } from "react-icons/fi"
import { useRouter } from "next/router"
import { SideList } from "@/components/sideList"

const Playlist = (props: any) => {
    const router = useRouter()
    console.log(props)
    return (
        <div className="px-[75px] pt-[54px]">
            <div className="flex flex-row items-center ">
                <div className="p-4 mr-2 cursor-pointer">
                    <FiChevronLeft size={40} onClick={()=>router.push('/')} color="white"/>
                </div>
                <Title
                    align={Align.left}
                    title={'Minhas Playlist'}
                    subTitle={'minhas listas salvas'}
                />                
            </div>
            <SideList onPress={console.log}  {...props.data} date={new Date(String(props.data.date))} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = nookie.get(ctx, 'playlist')
    if (!data.playlist) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }
    const parseData = JSON.parse(data.playlist)
    return {
        props: {
            data: parseData
        }
    }
}

export default Playlist