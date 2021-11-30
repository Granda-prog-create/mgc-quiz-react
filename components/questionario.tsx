import styles from '../styles/questionario.module.css'
import questaoModel from "../module/questao";
import Questao from './questao';
import Botao from './Botao';

interface QuestionarioProps {
    questao: questaoModel
    ultima: boolean
    questaoRespondida: (questao: questaoModel) => void
    irProximoPasso: () => void


}
export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {

        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice)) 
        }

    }
    return(
        <div className={styles.questionario}> 
        {props.questao ? 
        <Questao 
        valor={props.questao}
        tempoPraResposta={8}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={props.irProximoPasso} />

        : false

        }

        

        <Botao onClick={props.irProximoPasso} 
        texto={props.ultima ? 'Finalizar' : 'Próxima'} /> 

        </div>
    )
}