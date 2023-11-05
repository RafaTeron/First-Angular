import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {
  

  @Input() public tentativas : number = 0

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor(){
    console.log(this.coracoes)
  }
  ngOnChanges (): void {
    console.log('tentativas recebidas do painel : ' + this.tentativas)
  }

  ngOnInit(): void {
  }
}
