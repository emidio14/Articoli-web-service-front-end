import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions} from '@angular/material/dialog';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { ArticoliService } from 'src/app/services/articoli.service';

@Component({
  selector: 'app-delete.dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './delete.dialog.component.html',
  styleUrl: './delete.dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialogComponent {
  readonly dialog = inject(MatDialog);

  private articoliService = inject(ArticoliService);
  private dialogData = inject(MAT_DIALOG_DATA); 
  public articoliEsistenti: IArticoliDto[] = this.dialogData.articoliEsistenti;
  public dialogRef = inject(MatDialogRef<DeleteDialogComponent>);
  public data: any;


  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

    console.log("eliminazione dato")
    this.articoliService.deleteArticoli(this.data.id);
    
  }

  
}
