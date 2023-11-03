import { Component, Input, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {
  

  @Input() public tentativas : number = 0

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor(){
    console.log(this.coracoes)
  }

  ngOnInit(): void {
    console.log('tentativas recebidas do painel : ' + this.tentativas)
  }
}
