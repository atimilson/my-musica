import styled from 'styled-components';
import { Roboto } from 'next/font/google'
import { Variants } from '.';

const robot = Roboto({ weight: '400', subsets: ['latin'] })

interface ButtonsProps{
    variant? : Variants
}

export const ButtonStyled = styled.button.attrs<ButtonsProps>((props)=>({
    className:`bg-primary text-white w-full p-[10px] text-[14px] 
    ${props.variant === Variants.Danger && 'bg-red-500'}`
}))<ButtonsProps>`    
    font-family: ${robot.style.fontFamily}; 
`;