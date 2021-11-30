import styles from '../styles/botao.module.css'
import Link from 'next/link'

interface botaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao (props: botaoProps) {

function renderizarBotao() {
    return (
        <button className={styles.botao}
        onClick={props.onClick}>
            {props.texto}
        </button>
    )
    
}

    return props.href ? (
        <Link href={props.href}>
         {renderizarBotao()}
        </Link>

    ) : renderizarBotao()
       
}