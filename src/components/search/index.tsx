
import { WeatherApi } from '@/services/api'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'


interface SearchProps{
    onSearch: (inputValue : string) => void
}

export function Search(props : SearchProps) {
    const [inputValue, setInputValue] = useState<string>('')
   
    return (
        <div className='flex flex-row justify-between bg-primary min-h-[54px]
         rounded-lg pr-10'>
            <input
                className='flex flex-1 bg-transparent text-white focus:outline-none
                text-[14px] px-10'
                type="text" id="searchInput" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Digite sua cidade...' />
            <button disabled={!Boolean(inputValue)} onClick={() => props.onSearch(inputValue)}>
                <FiSearch color='#FFF' className='text-white'/>
            </button>
        </div>
    )
}