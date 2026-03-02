import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IArticoliDto } from '../models/ArticoliDto';

@Injectable({
  providedIn: 'root',
})
export class ArticoliService {

  private baseUrl = 'http://localhost:8080/api/articoli/';

  datachange: BehaviorSubject<IArticoliDto[]> = new BehaviorSubject<IArticoliDto[]>([]);

  dialogData: any;

  constructor(private http: HttpClient) { }

  //CRUD API REST

  getAllArticoli(): Observable<IArticoliDto[]> {
    return this.http.get<IArticoliDto[]>(`${this.baseUrl}`)
      }
}
