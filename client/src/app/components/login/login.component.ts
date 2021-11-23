import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public nom: String = '';
  public contrassenya: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(): void {
    this.authService
      .loginUser({
        nom: this.nom,
        contrassenya: this.contrassenya,
      } as Usuari)
      .subscribe((res) => {
        if (res) this.router.navigate(['main']);
      });
  }
}