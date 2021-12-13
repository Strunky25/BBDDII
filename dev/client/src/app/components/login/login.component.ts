import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    this.authService.loginUser(this.nomUsuari, this.contrassenya).subscribe((res) => {
      if (res.num_rows && res.num_rows > 0) {
        console.log(res);
        this.router.navigate(['continguts']);
      }
    });
  }
}
