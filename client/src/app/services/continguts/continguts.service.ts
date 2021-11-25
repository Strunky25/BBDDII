import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contingut } from 'src/app/models/contingut';

@Injectable({
  providedIn: 'root',
})
export class ContingutsService {
  constructor() {}

  obtenirTotsContinguts(): Observable<Array<Contingut>> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          titol: 'EL GIGANTE NOBLE LO HA VUELTO A HACER',
          url: 'https://youtu.be/SN3saeWHMIw',
          categoria: { nom: 'Entreteniment' },
          tipusUsuaris: [{ tipus: 'Adult' }],
        } as Contingut,
      ]);
    });
  }

  obtenirContingutsFavorits(): Observable<Array<Contingut>> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          titol: 'EL GIGANTE NOBLE LO HA VUELTO A HACER',
          url: 'https://youtu.be/SN3saeWHMIw',
          categoria: { nom: 'Entreteniment' },
          tipusUsuaris: [{ tipus: 'Adult' }],
        } as Contingut,
      ]);
    });
  }

  obtenirContingutsCategoriesFavorites(): Observable<Array<Contingut>> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          titol: 'EL GIGANTE NOBLE LO HA VUELTO A HACER',
          url: 'https://youtu.be/SN3saeWHMIw',
          categoria: { nom: 'Entreteniment' },
          tipusUsuaris: [{ tipus: 'Adult' }],
        } as Contingut,
      ]);
    });
  }
}
