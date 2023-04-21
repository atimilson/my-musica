import styled from 'styled-components';
import { Roboto } from 'next/font/google'

const robot = Roboto({ weight: '400', subsets: ['latin'] })

export const ButtonStyled = styled.button.attrs((props)=>({
    className:'bg-primary text-white w-full p-[10px] text-[14px]'
}))`    
    font-family: ${robot.style.fontFamily}; 
`;