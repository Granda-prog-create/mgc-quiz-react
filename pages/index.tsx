
import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/questionario'
import questaoModel from '../module/questao'
import { useRouter } from 'next/dist/client/router'


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const [IdsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<questaoModel>()
  const [respostasCertas, setrespostasCertas] = useState<number>(0)


  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const  json = await resp.json()
    const novaQuestao = questaoModel.criarUsandoObjeto(json)
    console.log()
    setQuestao(novaQuestao)
  }

useEffect(() => {
  carregarIdsDasQuestoes()
  
}, [])

useEffect(() => {
  IdsDasQuestoes.length > 0 && carregarQuestao(IdsDasQuestoes[0])
}, [IdsDasQuestoes])
  
  
  function questaoRespondida(questaoRespondida: questaoModel) {
    setQuestao(questaoRespondida) 
    const acertou = questaoRespondida.acertou
    setrespostasCertas(respostasCertas + (acertou ? 1 : 0))

  }

  function idProximaPergunta() {
    if(questao) {
      const proximoIndice = IdsDasQuestoes.indexOf(questao.id) + 1
      return IdsDasQuestoes[proximoIndice]
    }
   
  }

  function irProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()

  }

  function irPraProximaQuestao (proximoId: number){
    carregarQuestao(proximoId) 

  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: IdsDasQuestoes.length,
        certas: respostasCertas
      }
    })

  }

  return (
   
     <Questionario 
     questao={questao}
     ultima={idProximaPergunta() === undefined}
     questaoRespondida={questaoRespondida}
     irProximoPasso={irProximoPasso}
     /> 


 
  )
}
