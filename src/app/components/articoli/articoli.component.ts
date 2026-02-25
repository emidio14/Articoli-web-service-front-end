import { Component } from '@angular/core';
import { IArticoliDto } from './models/ArticoliDto';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './articoli.component.css',
  templateUrl: './articoli.component.html',
  imports: [],
})

const ELEMENT_DATA: IArticoliDto[] = [
    {"codArt": "1", "descrizione": "Miele 350g", "um": "pz", "codStat": "ST01", "pzCart": 6, "pesoNetto": 0.3, "idStatoArt": "D", "dataCreaz": new Date("2026-02-11"), "barcode": "8001234567890"},
    {"codArt": "3", "descrizione": "Mele Gala 500g", "um": "pz", "codStat": "ST01", "pzCart": 12, "pesoNetto": 0.5, "idStatoArt": "D", "dataCreaz": new Date("2026-02-11"), "barcode": "8001234567891"},
    {"codArt": "4", "descrizione": "Banane 1kg", "um": "kg", "codStat": "ST01", "pzCart": 8, "pesoNetto": 1.0, "idStatoArt": "D", "dataCreaz": new Date("2026-02-11"), "barcode": "8001234567892"},
    {"codArt": "11", "descrizione": "Mirtilli 125g", "um": "pz", "codStat": "ST01", "pzCart": 24, "pesoNetto": 0.125, "idStatoArt": "D", "dataCreaz": new Date("2026-07-01"), "barcode": "8001234567893"},
    {"codArt": "2", "descrizione": "Minetrone 250g", "um": "pz", "codStat": "ST01", "pzCart": 17, "pesoNetto": 1.136, "idStatoArt": "A", "dataCreaz": new Date("2024-07-31"), "barcode": "8001234567894"}
];

export class AppComponent {
  displayedColumns: string[] = ['codArt', 'idStatoArt', 'dataCreaz', 'descrizione', 'codStat', 'pesoNetto', 'pzCart', 'um', 'barcode'];
  dataSource = ELEMENT_DATA;

}

