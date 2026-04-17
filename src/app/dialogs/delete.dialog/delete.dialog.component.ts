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


  closeDialog(): void {
    this.dialogRef.close();
  }

  public confirmDelete() {

    console.log("ID passato: ", this.dialogData.id, typeof this.dialogData.id);
    this.articoliService.deleteArticoli(this.dialogData.id).subscribe({        
      
      next: (response: IArticoliDto) => {
        console.log('Eliminato record: ', response);
        this.dialogRef.close(response);
        
      },
      error: (err) => {
        console.error('Errore durante l\'eliminazione del record: ', err);
      }

    })
  }

  
}
