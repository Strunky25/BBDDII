import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class MissatgesService {
  private missatges: string[] = ['Hey tio', 'Com va?'];

  getMissatges(usuari: Usuari) {
    return new Observable<string[]>((subscriber) =>
      subscriber.next(this.missatges)
    );
  }
}
