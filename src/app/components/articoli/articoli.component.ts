import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArticoliService } from './services/articoli.service';
import { IArticoliDto } from 'src/app/models/ArticoliDto';

@Component({
  selector: 'app-articoli',
  imports: [MatTableModule],
  templateUrl: './articoli.component.html',
  styleUrl: './articoli.component.css',
  providers: [ArticoliService]
})
export class AppComponent implements OnInit{
  // 1. I nomi devono essere IDENTICI ai matColumnDef del tuo HTML
  displayedColumns: string[] = [
    'CodiceArticolo', 
    'Descrizione', 
    'Um', 
    'CodiceStato', 
    'NumeroPezzi', 
    'PesoNetto', 
    'idStatoArticolo', 
    'DataCreazione', 
    'Barcode'
  ];

  dataSource = new MatTableDataSource<IArticoliDto>([]);

  constructor(private articoliService: ArticoliService){}

  ngOnInit(): void {
    this.recoveryDate();
  }

  recoveryDate(): void{
    this.articoliService.getAllArticoli().subscribe({
      next: (response: IArticoliDto[]) => {
        this.dataSource.data = response;
        console.log('Dati ricevuti dal backend: ', response);
      },
      error: (err) => console.error('Errore durante la chiamata: ' + err)
    })
  }
}
