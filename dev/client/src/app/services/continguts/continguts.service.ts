import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContingutsService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  public obtenirContingutsVisualitzables(): Observable<Contingut[]> {
    return this.http.get<Contingut[]>(
      `/BD202/servidor/getContingutsVisualitzables.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public obtenirContingutsCategoriesFavorites(): Observable<Contingut[]> {
    return this.http.get<Contingut[]>(
      `/BD202/servidor/getContingutsFromCategoria.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public obtenirContingutsFavorits(): Observable<Contingut[]> {
    return this.http.get<Contingut[]>(
      `/BD202/servidor/getContingutsFavorits.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public afegirContingutFavorit(idContingut: number): Observable<any> {
    return this.http.post('/BD202/servidor/addContingutFavorit.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      idContingut,
    });
  }

  public llevarContingutFavorit(idContingut: number): Observable<any> {
    return this.http.post('/BD202/servidor/deleteContingutFavorit.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      idContingut,
    });
  }
}
