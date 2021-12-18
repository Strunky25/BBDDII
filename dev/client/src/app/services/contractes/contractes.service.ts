import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contracte } from 'src/app/models/contracte';
import Factura from 'src/app/models/factura';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContractesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  public getContractes(): Observable<Contracte[]> {
    return this.http.get<Contracte[]>(
      `http://localhost/BD202/servidor/getContractes.php?nomUsuari=${
        this.auth.getCurrentUser().nomUsuari
      }`
    );
  }

  public createContracte(tipusContracte: string): Observable<boolean> {
    return this.http.post<boolean>(
      'http://localhost/BD202/servidor/addContracte.php',
      {
        nomUsuari: this.auth.getCurrentUser().nomUsuari,
        tipusContracte,
      }
    );
  }

  public getFactures(idContracte: number): Observable<Factura[]> {
    return this.http.get<Factura[]>(
      `http://localhost/BD202/servidor/getFactures.php?idContracte=${idContracte}`
    );
  }

  public marcarFacturaLlegida(idFactura: number): Observable<boolean> {
    return this.http.post<boolean>(
      'http://localhost/BD202/servidor/updateFactura.php',
      { idFactura }
    );
  }
}
