import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArticoliService } from 'src/app/services/articoli.service';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { OnInit } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-articoli',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './articoli.component.html',
  styleUrl: './articoli.component.css',
  providers: [ArticoliService]
})
export class ArticoliComponent implements OnInit, AfterViewInit{
 
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

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  ngOnInit(): void {
    this.recoveryData();
  }

  recoveryData(): void{
    this.articoliService.getAllArticoli().subscribe({
      next: (response: IArticoliDto[]) => {
        this.dataSource.data = response;
        console.log('Dati ricevuti dal backend: ', response);
      }
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
}
