import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArticoliService } from 'src/app/services/articoli.service';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './articoli.component.html',
  styleUrl: './articoli.component.css',
  providers: [ArticoliService]
})
export class ArticoliComponent implements OnInit{
 
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
      }
    })
  }
}
