import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArticoliService } from 'src/app/services/articoli.service';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { AddDialogComponent } from 'src/app/dialogs/add.dialog/add.dialog.component';
import { DeleteDialogComponent } from 'src/app/dialogs/delete.dialog/delete.dialog.component';
import { EditDialogComponent } from 'src/app/dialogs/edit.dialog/edit.dialog.component';
import { OnInit } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatInputModule } from '@angular/material/input';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-articoli',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatInputModule, MatButtonModule, MatIcon, DecimalPipe],
  templateUrl: './articoli.component.html',
  styleUrl: './articoli.component.css',
  providers: [ArticoliService]
})
export class ArticoliComponent implements OnInit, AfterViewInit{
 
  displayedColumns: string[] = ['CodiceArticolo', 'Descrizione', 'Um', 'CodiceStato', 'NumeroPezzi', 'PesoNetto', 'idStatoArticolo', 'DataCreazione', 'Barcode', 'Actions'];
  dataSource = new MatTableDataSource<IArticoliDto>([]);
  dialog= inject(MatDialog);
  articoliService = inject(ArticoliService);


  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
    this.dataSource.sort = this.sort;
  }

  filterPagination(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  addNew() {
    const newRecord = new IArticoliDto();
  
    const dialogRef = this.dialog.open(AddDialogComponent, {

    height: '700px',
    width: '600px',
    data: newRecord
  });

    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result: ', result);

      if(result){

        this.dataSource.data= [...this.dataSource.data, newRecord];
        this.refreshtable();
      }
    })
  }
  

  /*edit(){}

  delete(){}
  */

  private refreshtable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.sort.sortChange.emit(this.sort);
  }
}
