import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { ArticoliService } from 'src/app/services/articoli.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-add.dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add.dialog.component.html',
  styleUrl: './add.dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddDialogComponent implements ErrorStateMatcher, OnInit{
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  
  ngOnInit(): void {
    if(this.data){
      this.data.ingredienti = null as any;
      this.data.iva = null as any;
      this.data.famAssort = null as any;
    }
  }

  private articoliService = inject(ArticoliService);
  public data = inject<IArticoliDto>(MAT_DIALOG_DATA);
  public dialogRef = inject(MatDialogRef<AddDialogComponent>);

  getErrorMessage(control: any): string {
    if (!control) return '';

    if (control.hasError('required')) return 'Campo Obbligatorio';
    if (control.hasError('duplicate')) return 'Valore già presente';
  
  return '';
}

  submit() {
    //Sto dicendo ad angular che quando il form è vuoto non fare nulla di default perchè viene gestito tramite bottone
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd() {

    if(this.data){
        console.log('Payload di request: ', JSON.stringify(this.data));
        
      }

    this.articoliService.addArticoli(this.data).subscribe({        
      
      next: (response: IArticoliDto) => {
        console.log('Aggiunto nuovo record: ', response);
        this.dialogRef.close(response);
        
      },
      error: (err) => {
        console.error('Errore durante l\'aggiunta del record: ', err);
      }

    })
  }
}
