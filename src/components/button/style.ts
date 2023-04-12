import styled from 'styled-components';
import { Roboto } from 'next/font/google'

const robot = Roboto({ weight: '400', subsets: ['latin'] })

export const ButtonStyled = styled.button`
    padding: 10px;  
    background: #263238;
    border: none;
    color: #FFF;
    font-family: ${robot.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;


    position: absolute;
    width: 114px;
    height: 36px;
    left: 75px;
    top: 29px;

`;