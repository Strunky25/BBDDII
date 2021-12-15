import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contracte } from 'src/app/models/contracte';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContractesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getContractes(): Observable<Contracte[]> {
    return this.http.get<Contracte[]>(
      `/BD202/servidor/getContractes.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  createContracte(tipusContracte: string): Observable<boolean> {
    return this.http.post<boolean>('/BD202/servidor/addContracte.php', {
      nomUsuari: this.auth.getCurrentUser().nomUsuari,
      tipusContracte,
    });
  }
}
