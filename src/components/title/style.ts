import styled, { css } from "styled-components";
import { Roboto } from 'next/font/google'
import { Align } from ".";

const robotBold = Roboto({ weight: '900', subsets: ['latin'] });
const robotNormal = Roboto({ weight: '400', subsets: ['latin'] })
interface ContainerProps {
    align? : Align
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin-top:  132px; */
    ${({align})=>align && css`
     align-items:  ${align}
    `}
`;


export const Header = styled.h1`
    font-family: ${robotBold.style.fontFamily};
    font-size: 36px;
    line-height: 42px;
    color: #FFF;
    text-align: center;
    max-width: 449px;
`;


export const SubHeader = styled.h3`
    font-family: ${robotNormal.style.fontFamily};
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFF;

`;
