import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string): boolean => {
    var retVal = (userid === 'Nicola' && password === '1234') ? true : false;

    if (retVal) {
      sessionStorage.setItem('autenticato', 'true');
    }

    return retVal;
  }

  loggedUser = (): string | null => (sessionStorage.getItem('Utente') ?  sessionStorage.getItem('Utente') : "");

  isLogged = (): boolean => (sessionStorage.getItem('Utente') ? true : false);
}