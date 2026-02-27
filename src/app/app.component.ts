import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IArticoliDto } from './models/ArticoliDto';
import { ArticoliService } from './services/articoli.service';


@Component({
  selector: 'app-root',
  styleUrl: 'app.component.css',
  templateUrl: 'app.component.html',
  imports: [MatTableModule, MatPaginatorModule],
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
