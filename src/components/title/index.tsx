import { Container, Header, SubHeader } from "./style";

export enum Align{
    left = 'start',
    center= 'center',
    rigth = 'end'
}
interface TitleProps {
    title :string
    subTitle ? : string
    align?:Align
}

export function Title({title, subTitle, align} : TitleProps){
    return(
        <Container align={align}>
            <Header>
            {title}
            </Header>
            <SubHeader>
            {subTitle}
            </SubHeader>
        </Container>
    )
}