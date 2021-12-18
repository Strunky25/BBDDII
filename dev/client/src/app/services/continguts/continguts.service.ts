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
      `http://localhost/BD202/servidor/getContingutsVisualitzables.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public obtenirContingutsCategoriesFavorites(): Observable<Contingut[]> {
    return this.http.get<Contingut[]>(
      `http://localhost/BD202/servidor/getContingutsFromCategoria.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public obtenirContingutsFavorits(): Observable<Contingut[]> {
    return this.http.get<Contingut[]>(
      `http://localhost/BD202/servidor/getContingutsFavorits.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public afegirContingutFavorit(idContingut: number): Observable<any> {
    return this.http.post('http://localhost/BD202/servidor/addContingutFavorit.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      idContingut,
    });
  }

  public llevarContingutFavorit(idContingut: number): Observable<any> {
    return this.http.post('http://localhost/BD202/servidor/deleteContingutFavorit.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      idContingut,
    });
  }

  public afegirCategoriaFavorita(nomCategoria: string): Observable<any> {
    return this.http.post('http://localhost/BD202/servidor/addCategoriaFavorita.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      nomCategoria,
    });
  }

  public llevarCategoriaFavorita(nomCategoria: string): Observable<any> {
    return this.http.post('http://localhost/BD202/servidor/deleteCategoriaFavorita.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      nomCategoria,
    });
  }

  public obtenirCategoriesFavorites(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost/BD202/servidor/getCategoriesFavorites.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public afegirContingut(contingut: any): Observable<any> {
    return this.http.post<any>('http://localhost/BD202/servidor/addContingut.php', contingut);
  }

  public llevarContingut(idContingut: number): Observable<any> {
    return this.http.post<any>('http://localhost/BD202/servidor/deleteContingut.php', {
      idContingut,
    });
  }
}
