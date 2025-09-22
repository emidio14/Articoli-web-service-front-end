import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = 'Nicola';
  password: string = '';

  autenticato: boolean = true;
  errMsg: string = 'Spiacente, la userId o la password non sono corretti';
  okMsg: string = 'Accesso effettuato con successo';
  titolo: string = 'Accesso & Autenticazione';
  sottotitolo: string = 'Procedi ad inserire le tue credenziali';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.userId === 'Nicola' && this.password === '1234') {
      this.route.navigate(['welcome', 'this.userId']);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}