import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public registerUser(user: Usuari): Observable<any> {
    return this.http.post('http://localhost/public/servidor/register.php', user);
  }

  public loginUser(user: Usuari): Observable<any> {
    return this.http.get(`http://localhost/public/servidor/login.php?nom=${user.nom}&contrassenya=${user.contrassenya}`);
  }
}
