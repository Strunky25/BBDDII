import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contracte } from 'src/app/models/contracte';

@Injectable({
  providedIn: 'root',
})
export class ContractesService {
  constructor(private http: HttpClient) {}

  createContracte(contracte: Contracte): Observable<boolean> {
    console.log(contracte);
    return new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    // this.http.post("ddsdss", contracte);
  }
}
