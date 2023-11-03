import { Component } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent {

  public coracaoCheio : string = '/assets/coracao_cheio.png'
  public coracaoVazio : string = '/assets/coracao_vazio.png'

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

}
