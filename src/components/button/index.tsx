import { ButtonStyled } from "./style"

interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
}

export default function Button(props: ButtonProps) {
    return (
        <>           
            <ButtonStyled 
                onClick={props.onClick}
            >{props.label}
            </ButtonStyled>
            {props.error && (<small>erro no botão</small>)}
        </>
    )
}