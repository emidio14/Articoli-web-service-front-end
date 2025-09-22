import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

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

  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', 'this.userId']);
      
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}