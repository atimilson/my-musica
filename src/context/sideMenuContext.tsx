import { WeatherApi, shazamApi } from "@/services/api";
import { createContext, useContext, useState } from "react";
import { ShazamApiProps, WeatherApiProps } from "./props";

const initValor = {
    city: '',
    temp: 0,
    date: null,
    playlist: []
}

interface SideMenuProps {
    children: JSX.Element
}

export interface WhtherDataProps {
    city: string
    temp: number
    date: Date | null
    playlist: {
        name: string
        author: string
        img: string
    }[]
}

interface SideMenuContextProps {
    clearWethwerDta: () => void
    data: WhtherDataProps
    loading: boolean
    getWatherData: (inputValue: string) => void
}

const SideMenuContext = createContext({} as SideMenuContextProps)

export const SideMenuProvider = (props: SideMenuProps) => {
    const [loading, setLoading] = useState(false);
    const [dataWheather, setDataWheather] = useState<WhtherDataProps>(initValor);

    async function getShazamPlaylist(playlistType: 'classic' | 'pop' | 'rock') {
        return await shazamApi.get<ShazamApiProps>('search', {
            params: {
                term: playlistType
            }
        })
    }
    const methods = {
        classic: async () => {
            return await getShazamPlaylist('classic')
        },
        pop: async () => {
            return await getShazamPlaylist('pop')
        },
        rock: async () => {
            return await getShazamPlaylist('rock')
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
                const ShazamResponse = await methods.classic()
                setDataWheather({
                    temp: data.data.main.temp,
                    city: data.data.name,
                    date: new Date(),
                    playlist: ShazamResponse.data.tracks.hits.map(track => {
                        return {
                            name: track.track.title,
                            author: track.track.subtitle,
                            img: track.track.images.background
                        }
                    })
                })

                return
            }
            if (data.data.main.temp < 30) {
                const ShazamResponse = await methods.pop()
                setDataWheather({
                    temp: data.data.main.temp,
                    city: data.data.name,
                    date: new Date(),
                    playlist: ShazamResponse.data.tracks.hits.map(track => {
                        return {
                            name: track.track.title,
                            author: track.track.subtitle,
                            img: track.track.images.background
                        }
                    })
                })
                return
            }

            const ShazamResponse = await methods.rock()
            setDataWheather({
                temp: data.data.main.temp,
                city: data.data.name,
                date: new Date(),
                playlist: ShazamResponse.data.tracks.hits.map(track => {
                    return {
                        name: track.track.title,
                        author: track.track.subtitle,
                        img: track.track.images.background
                    }
                })
            })


        } catch (error) {
            alert('Cidade não existe');
        } finally {
            setLoading(false)
        }


    }
    function clearWethwerDta() {
        const confirm = window.confirm('Tem certeza que deseja limpar a lista?')
        if (confirm) {
            setDataWheather(initValor)
        }
    }
    return (
        <SideMenuContext.Provider value={{
            data: dataWheather, clearWethwerDta, loading, getWatherData
        }}>
            {props.children}
        </SideMenuContext.Provider>
    )
}

export const useSideMenu = () => useContext(SideMenuContext);