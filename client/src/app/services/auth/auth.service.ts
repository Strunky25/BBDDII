import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: Usuari;

  constructor(/*private http: HttpClient*/) {}

  public registerUser(user: Usuari): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    // return this.http.post('http://localhost/public/servidor/register.php', user);
  }

  public loginUser(nomUsuari: String, pass: String): Observable<boolean> {
    this.user = {
      nom: 'nom',
      llinatges: 'llinatges',
      contrassenya: pass,
      nomUsuari: nomUsuari,
    } as Usuari;
    return new Observable<boolean>((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    // return this.http.get(`http://localhost/public/servidor/login.php?nom=${user.nom}&contrassenya=${user.contrassenya}`);
  }

  public getCurrentUser(): Usuari {
    return this.user;
  }
}
