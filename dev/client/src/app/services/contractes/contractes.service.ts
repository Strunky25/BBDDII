// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contracte } from 'src/app/models/contracte';
import { Usuari } from 'src/app/models/usuari';
// import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContractesService {
  public contractes: Contracte[] = [];

  constructor(/*private http: HttpClient, private auth: AuthService*/) {}

  hasContracte(usuari: Usuari): Observable<boolean> {
    return new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    // this.http.get("ddsdss", usuari);
  }

  createContracte(contracte: Contracte, usuari: Usuari): Observable<boolean> {
    this.contractes.push(contracte);
    console.log(this.contractes);
    return new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    // this.http.post("ddsdss", {contracte, usuari});
  }

  getContractes(usuari: Usuari): Observable<Contracte[]> {
    console.log(this.contractes);
    return new Observable((subscriber) => {
      subscriber.next(this.contractes);
      subscriber.complete();
    });
    // this.http.get("ddsdss", usuari);
  }
}
