interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button 
                onClick={props.onClick}
            >{props.label}
            </button>
            {props.error && (<small>erro no botão</small>)}
        </>
    )
}