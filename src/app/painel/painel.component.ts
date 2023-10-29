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
  
  constructor() {
    console.log(this.frases)
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    //console.log(this.resposta)
  }

  public verificarTextoDigitado(): void {
    console.log('Verificar resposta:', this.resposta)
  }
}
