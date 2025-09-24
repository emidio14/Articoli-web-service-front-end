import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticoli } from 'src/app/shared/models/Articoli';

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {
  
  constructor() { }

  @Input('articolo-card')
  articolo: IArticoli = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: ''
  }

  @Output('elimina-card')
  delete = new EventEmitter<IArticoli>();
  @Output('modifica-card')
  edit = new EventEmitter<IArticoli>();

  ngOnInit(): void {
  }

  editArt = () => this.edit.emit(this.articolo);
  delArt = () => this.delete.emit(this.articolo);

}
