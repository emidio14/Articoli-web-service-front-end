import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { ArticoliService } from 'src/app/services/articoli.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add.dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add.dialog.component.html',
  styleUrl: './add.dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AddDialogComponent {

  private articoliService = inject(ArticoliService);
  public data = inject<IArticoliDto>(MAT_DIALOG_DATA);
  public dialogRef = inject(MatDialogRef<AddDialogComponent>);

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Obbligatorio' : '';
  }

  submit() {
    //Sto dicendo ad angular che quando il form è vuoto non fare nulla di default perchè viene gestito tramite bottone
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd() {

    if(!this.data){
        console.error('Dati del nuovo articolo non validi: ', JSON.stringify(this.data));
        return;
      }

    this.articoliService.addArticoli(this.data).subscribe({        
      
      next: (response: IArticoliDto) => {
        console.log('Aggiunto nuovo record: ', response);
        this.dialogRef.close();
      },
      error: (err) => {
        console.error('Errore durante l\'aggiunta del record: ', err);
      }

    })
  }
}
