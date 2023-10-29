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
  public resposta: any

  public rodada: number = 0
  public rodadaFrase: Frase
  
  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    //console.log(this.resposta)
  }

  public verificarTextoDigitado(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('Tradução correta')

      this.rodada++

      this.rodadaFrase = this.frases[this.rodada]
    }else{
      alert('Tradução Incorreta, tente novamente.')
    }

    console.log('Verificar resposta:', this.resposta)
  }
}
