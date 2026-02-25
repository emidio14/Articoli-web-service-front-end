import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync() // Configurazione moderna e consigliata
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }