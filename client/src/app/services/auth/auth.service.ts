import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Usuari | undefined;

  constructor(/*private http: HttpClient*/) {}

  public registerUser(): Observable<any> {
    return new Observable<any>((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
    });
    // return this.http.post('http://localhost/public/servidor/register.php', user);
  }

  public loginUser(): Observable<any> {
    this.user = {
      nom: 'Dawid',
      llinatges: 'Roch Dawid',
      contrassenya: 'blabla',
      nomUsuari: 'ddawidroch1',
    } as Usuari;
    return new Observable<any>((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
    });
    // return this.http.get(`http://localhost/public/servidor/login.php?nom=${user.nom}&contrassenya=${user.contrassenya}`);
  }

  public getCurrentUser(): Usuari | undefined {
    return this.user;
  }
}
