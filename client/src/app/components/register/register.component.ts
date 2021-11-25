import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nomUsuari: String = '';
  contrassenya: String = '';
  nom: String = '';
  llinatges: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser(): void {
    this.authService
      .registerUser({
        nomUsuari: this.nomUsuari,
        contrassenya: this.contrassenya,
        nom: this.nom,
        llinatges: this.llinatges,
      } as Usuari)
      .subscribe(() => this.router.navigate(['']));
  }
}
