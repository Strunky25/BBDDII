import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      .loginUser(this.nom, this.contrassenya)
      .subscribe(() => this.router.navigate(['continguts']));
  }
}
