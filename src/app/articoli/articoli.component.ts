import { Component } from '@angular/core';
import { IArticoli } from '../models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent {

  /*formattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
  */
  articoli: IArticoli[] = [
    { codart: '014600301', descrizione: 'Barilla FARINA 1 KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    { codart: '054645301', descrizione: 'Barilla PASTA GR.500 N.70 1/2 PENNE', um: 'PZ', pzcart: 30, peso: 0.5, prezzo: 1.3, active: true, data: new Date() },
    { codart: '064680901', descrizione: 'FINDUS FIOR DI NASELLO 300 GR', um: 'PZ', pzcart: 8, peso: 0.3, prezzo: 6.46, active: true, data: new Date() },
    { codart: '014100777', descrizione: 'FINDUS CROCCOLE 400 GR', um: 'PZ', pzcart: 12, peso: 0.4, prezzo: 5.97, active: true, data: new Date() },
  ];

  constructor() { }

}