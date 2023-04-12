import styled from "styled-components";
import { Roboto } from 'next/font/google'

const robotBold = Roboto({ weight: '900', subsets: ['latin'] });
const robotNormal = Roboto({ weight: '400', subsets: ['latin'] })


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top:  132px;
`;


export const Header = styled.h1`
    font-family: ${robotBold.style.fontFamily};
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    max-width: 449px;
`;


export const SubHeader = styled.h3`
    font-family: ${robotNormal.style.fontFamily};
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000A1;

`;
