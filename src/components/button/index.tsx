import { ButtonStyled } from "./style"
export enum Variants{
    Danger = 'danger'
}
interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
    variant?: Variants
}

export default function Button(props: ButtonProps) {
    return (
        <>           
            <ButtonStyled 
                variant={props.variant}
                onClick={props.onClick}
            >{props.label}
            </ButtonStyled>
            {props.error && (<small>erro no botão</small>)}
        </>
    )
}