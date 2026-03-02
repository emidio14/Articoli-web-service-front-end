import { Component } from '@angular/core';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { ArticoliService } from './services/articoli.service';
import { ArticoliComponent } from './components/articoli/articoli.component';


@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: 'app.component.css',
  templateUrl: 'app.component.html',
  imports: [
    MatTableModule, 
    MatPaginatorModule, 
    ArticoliComponent],
  providers: [ArticoliService]
})
export class AppComponent {

}
