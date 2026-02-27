import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticoliDto } from '../models/ArticoliDto';

@Injectable({
  providedIn: 'root',
})
export class ArticoliService {

  private baseUrl = 'http://localhost:8080/api/articoli/';

    constructor(private http: HttpClient){}

    getAllArticoli(): Observable<IArticoliDto []>{
      return this.http.get<IArticoliDto[]>(`${this.baseUrl}`);
    }

    getByIdArticoli(codArt: String): Observable<IArticoliDto []>{
      return this.http.get<IArticoliDto []>(`${this.baseUrl}${codArt}`);
    }
  
}
