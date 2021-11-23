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
  public nom: String = '';
  public contrassenya: String = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser(): void {
    this.authService
      .registerUser()
      .subscribe(() => this.router.navigate(['']));
  }
}
