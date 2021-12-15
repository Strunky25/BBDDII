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
  public nomUsuari: String = '';
  public contrassenya: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(): void {
    this.authService
      .loginUser(this.nomUsuari, this.contrassenya)
      .subscribe((res) => {
        if (res) {
          const usuari: Usuari = {
            nom: res[0].nom,
            nomUsuari: res[0].nomUsuari,
            tipusUsuari: res[0].tipusUsuari,
            llinatges: res[0].llinatges,
            contrassenya: res[0].contrasenya,
            categoriesFavorites: [],
            contingutsFavorits: []
          };
          this.authService.setCurrentUser(usuari);
          this.router.navigate(['continguts']);
        }
      });
  }
}
