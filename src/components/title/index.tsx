import { Container, Header, SubHeader } from "./style";

interface TitleProps {
    title :string
    subTitle ? : string
}

export function Title({title, subTitle} : TitleProps){
    return(
        <Container>
            <Header>
            {title}
            </Header>
            <SubHeader>
            {subTitle}
            </SubHeader>
        </Container>
    )
}