import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Missatge from 'src/app/models/missatge';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MissatgesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  public getMissatges(): Observable<Missatge[]> {
    return this.http.get<Missatge[]>(
      `/BD202/servidor/getRecomanacions.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public marcarLlegit(idMissatge: number): Observable<boolean> {
    return this.http.post<boolean>('/BD202/servidor/updateMissatge.php', {
      idMissatge,
    });
  }
}
