import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Usuari = {
    nomUsuari: '',
    nom: '',
    llinatges: '',
    contrassenya: '',
    tipusUsuari: '',
    contingutsFavorits: [],
    categoriesFavorites: []
  } as Usuari;

  constructor(private http: HttpClient) {}

  public registerUser(user: Usuari): Observable<boolean> {
    return this.http.post<boolean>('/BD202/servidor/register.php', user);
  }

  public loginUser(nomUsuari: String, pass: String): Observable<any> {
    return this.http.get<any>(
      `/BD202/servidor/login.php?nomUsuari=${nomUsuari}&contrassenya=${pass}`
    );
  }

  public getCurrentUser(): Usuari {
    return this.user;
  }

  public setCurrentUser(user: Usuari): void {
    this.user = user;
  }
}
