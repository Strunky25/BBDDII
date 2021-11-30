import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: Usuari;

  constructor(private http: HttpClient) {}

  public registerUser(user: Object): Observable<boolean> {
    return this.http.post<boolean>('/public/servidor/register.php', user);
  }

  public loginUser(nomUsuari: String, pass: String): Observable<any> {
    return this.http.get<any>(`/public/servidor/login.php?nomUsuari=${nomUsuari}&contrassenya=${pass}`);
  }

  public getCurrentUser(): Usuari {
    return this.user;
  }
}
