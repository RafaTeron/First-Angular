import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASE } from './frase.mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})

export class PainelComponent {

  public instrucao : string = 'Traduza a frase:'
  public frases: Array<Frase> = FRASE
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = new Frase('','');

  public progresso: number = 0

  public tentativas: number = 3
  
  constructor() {
    this.atualizarRodada()
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    //console.log(this.resposta)
  }

  public verificarTextoDigitado(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++

      if(this.rodada === 4){
        alert('Concluiu as traduções com sucesso.')
      }

      this.atualizarRodada()

      this.progresso = this.progresso + (100 / this.frases.length)
    }else{
      alert('Tradução Incorreta, tente novamente.')
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você perdeu esse jogo.')
      }
    }
    console.log(this.tentativas)

    console.log('Verificar resposta:', this.resposta)
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
