import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError, retry } from 'rxjs';
import { IArticoliDto } from '../models/ArticoliDto';


@Injectable({
  providedIn: 'root',
})
export class ArticoliService {

  private readonly baseUrl = 'http://localhost:8080/api/articoli/';

  datachange: BehaviorSubject<IArticoliDto[]> = new BehaviorSubject<IArticoliDto[]>([]);

  dialogData: any;

  constructor(private http: HttpClient) { }

  get data(): IArticoliDto[]{
    return this.datachange.value;
  }

  getDialogData(){
    return this.dialogData;
  }

  updateData(articoli: IArticoliDto[]){
    this.datachange.next(articoli);
    console.log('Dati inseriti nel BehaviorSubject del servizio:', articoli.length);
  }

  //CRUD API REST

  getAllArticoli(): Observable<IArticoliDto[]> {
    return this.http.get<IArticoliDto[]>(`${this.baseUrl}`)
  }

  addArticoli(articoliDto: IArticoliDto): Observable<IArticoliDto> {
    return this.http.post<IArticoliDto>(`${this.baseUrl}`, articoliDto)
  }

  updateArticoli(codArt: String, articoliDto: IArticoliDto): Observable<IArticoliDto> {
    return this.http.put<IArticoliDto>(`${this.baseUrl}/${codArt}`, articoliDto)
      
  }

  deleteArticoli(codArt: String): Observable<IArticoliDto> {
    return this.http.delete<IArticoliDto>(`${this.baseUrl}${codArt}`)
      }

}
