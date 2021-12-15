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
  public nomUsuari: string = '';
  public contrassenya: string = '';
  public nom: string = '';
  public llinatges: string = '';
  public tipusUsuari: string = '';
  public readonly tipus: string[] = ['Infantil', 'Adolescent', 'Adult'];

  constructor(private authService: AuthService, private router: Router) {}

  registerUser(): void {
    this.authService
      .registerUser({
        nomUsuari: this.nomUsuari,
        contrassenya: this.contrassenya,
        nom: this.nom,
        llinatges: this.llinatges,
        tipusUsuari: this.tipusUsuari,
        contingutsFavorits: [],
        categoriesFavorites: [],
      })
      .subscribe((val) => {
        if (val) {
          this.router.navigate(['']);
        }
      });
  }
}
