
import { WeatherApi } from '@/services/api'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export function Search() {
    const [inputValue, setInputValue] = useState<string>('')
    async function getWatherData(){
        try {
            const data = await WeatherApi.get('',{
                params:{
                    units :'metric',
                    q :  inputValue,
                }
            });
            console.log(data)            
        } catch (error) {
            alert('Cidade não existe');
            setInputValue('')
        }
        
    }
    return (
        <>
            <input type="text" id="searchInput" value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)} />
            <button disabled={!Boolean(inputValue)} onClick={()=>getWatherData()}>
                <FiSearch />
            </button>
        </>
    )
}