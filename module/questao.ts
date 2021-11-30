import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class questaoModel {
     #id: number
     #enunciado: string
     #respostas: RespostaModel []
     #acertou: boolean

   constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
       this.#id = id
       this.#enunciado = enunciado
       this.#respostas = respostas
       this.#acertou = acertou 
   }

   get id() {
       return this.#id
   }

   get enunciado(){
       return this.#enunciado
   }

   get respostas () {
       return this.#respostas
   }

   get acertou () {
       return this.#acertou
   }

   get naoRespondida () {
       return !this.respondida
   }

   get respondida () {
       for (let resposta of this.#respostas) {
           if(resposta.revelada) return true
       }
       return false
   }

  responderCom(indice: number): questaoModel {
      const acertou = this.#respostas[indice]?.certa
      const respostas = this.#respostas.map((resposta, i) => {
          const respostaSelecionada = indice === i 
          const deveRevelar = respostaSelecionada || resposta.certa 
          return deveRevelar ? resposta.revelar() : resposta
      })
      return new questaoModel(this.id, this.enunciado, respostas, acertou)


   }

   embaralharRespostas(): questaoModel {
       let respostasEmbaralhadas = embaralhar(this.#respostas)
       return new questaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
   }

  static criarUsandoObjeto(obj: questaoModel): questaoModel{
      const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
      return new questaoModel(obj.id, obj.enunciado, respostas, obj.acertou) 
  }
   
   
   paraObjeto() {
       return {
        id: this.#id,
        enunciado: this.#enunciado,
        respondida: this.respondida, 
        acertou: this.#acertou,
        respostas: this.#respostas.map(resp => resp.paraObjeto()),
       

       }

   }

}