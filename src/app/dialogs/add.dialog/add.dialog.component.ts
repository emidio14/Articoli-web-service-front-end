import { Component, inject } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { IArticoliDto } from 'src/app/models/ArticoliDto';
import { ArticoliService } from 'src/app/services/articoli.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add.dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDialogModule],
  templateUrl: './add.dialog.component.html',
  styleUrl: './add.dialog.component.css',
})
export class AddDialogComponent {

    private articoliService = inject(ArticoliService);
    public data = inject<IArticoliDto>(MAT_DIALOG_DATA);
    public dialogRef = inject(MatDialogRef<AddDialogComponent>);

    formControl = new FormControl('', [
      Validators.required
    ]);

    getErrorMessage(){
      return this.formControl.hasError('required') ? 'Campo Obbligatorio' : '';
    }

    submit(){
      //Sto dicendo ad angular che quando il form è vuoto non fare nulla di default perchè viene gestito tramite bottone
    }

    articoli = toSignal(this.articoliService.getAllArticoli(), {initialValue: [] as IArticoliDto[]});

    onNoClick(): void{
      this.dialogRef.close();
    }

    public confirmAdd(){
      this.articoliService.addArticoli(this.data);
    }


}
