import { WeatherApi, shazamApi } from "@/services/api";
import { createContext, useContext, useState } from "react";
import { WeatherApiProps } from "./props";

const initValor = {
    city: '',
    temp: '',
    playlist: []
}

interface SideMenuProps {
    children: JSX.Element
}

interface SideMenuContextProps {
    data: {
        city: string
        temp: string
        playlist: {
            name: string
            author: string
            img: string
        }[]
    },
    loading: boolean
    getWatherData: (inputValue: string) => void
}

const SideMenuContext = createContext({} as SideMenuContextProps)

export const SideMenuProvider = (props: SideMenuProps) => {
    const [loading, setLoading] = useState(false);

    async function getShazamPlaylist(playlistType: 'classic' | 'pop' | 'rock') {
        const data = await shazamApi.get('search', {
            params: {
                term: playlistType
            }
        })
    }
    const methods = {
        classic: async () => {
            await getShazamPlaylist('classic')
        },
        pop: async () => {
            await getShazamPlaylist('pop')
        },
        rock: async () => {
            await getShazamPlaylist('rock')
        },
    }
    async function getWatherData(inputValue: string) {
        setLoading(true)
        try {
            const data = await WeatherApi.get<WeatherApiProps>('', {
                params: {
                    units: 'metric',
                    q: inputValue,
                }
            });
            console.log(data)
            if (data.data.main.temp < 15) {
                const data = await methods.classic()
                console.log(data)
                return
            }
            if (data.data.main.temp < 30) {
                const data = await methods.pop()
                console.log(data)
                return
            }
            const rock = await methods.rock()
            console.log(rock)


        } catch (error) {
            alert('Cidade não existe');
        } finally {
            setLoading(false)
        }

    }
    return (
        <SideMenuContext.Provider value={{
            data: initValor, loading, getWatherData
        }}>
            {props.children}
        </SideMenuContext.Provider>
    )
}

export const useSideMenu = () => useContext(SideMenuContext);