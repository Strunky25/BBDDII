import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public administrador: boolean = false;
  public readonly tipus: string[] = ['Infantil', 'Adolescent', 'Adult'];

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

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
        administrador: this.administrador,
      })
      .subscribe((val) => {
        if (val) {
          this.router.navigate(['']);
        } else {
          this._snackBar.open(
            "Error intentant enregistrar l'usuari, intenta-ho una altra vegada",
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
            }
          );
        }
      });
  }
}
