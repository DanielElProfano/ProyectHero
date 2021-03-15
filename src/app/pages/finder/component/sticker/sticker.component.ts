import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() heroesSon: Hero[]| any;
  @Output() emmitHero = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

   
  }
  public sendIdHero(event: any){
    
    this.emmitHero.emit(Number(event.target.id))
  }



}
