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

  constructor() {
    console.log(this.frases)
  }

}
