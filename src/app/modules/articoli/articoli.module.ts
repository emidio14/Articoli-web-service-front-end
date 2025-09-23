import { ArticoliComponent } from './pages/articoli/articoli.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ArticoliComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class ArticoliModule { }
