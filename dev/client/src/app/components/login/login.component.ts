import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public nomUsuari: string = '';
  public contrassenya: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  public loginUser(): void {
    this.authService.loginUser(this.nomUsuari, this.contrassenya).subscribe(
      (res) => {
        if (res) {
          const usuari: Usuari = {
            nom: res[0].nom,
            nomUsuari: res[0].nomUsuari,
            tipusUsuari: res[0].tipusUsuari,
            llinatges: res[0].llinatges,
            contrassenya: res[0].contrasenya,
            categoriesFavorites: [],
            contingutsFavorits: [],
            administrador: res[0].administrador == 1,
          };
          this.authService.setCurrentUser(usuari);
          sessionStorage.setItem('usuari', JSON.stringify(usuari));
          this.router.navigate(['/continguts']);
        } else {
          this._snackBar.open(
            'Error intentant iniciar sessió, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      },
      () =>
        this._snackBar.open(
          'Error intentant iniciar sessió, intenta-ho una altra vegada',
          "D'acord",
          {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
          }
        )
    );
  }

  ngOnInit(): void {
    const usuari: string | null = sessionStorage.getItem('usuari');
    if (usuari) {
      this.authService.setCurrentUser(JSON.parse(usuari));
      console.log(JSON.parse(usuari));
      this.router.navigate(['/continguts']);
    }
  }
}
