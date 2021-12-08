import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Contingut } from 'src/app/models/contingut';
import { Usuari } from 'src/app/models/usuari';

@Injectable({
  providedIn: 'root',
})
export class ContingutsService {
  private continguts: Contingut[] = [
    {
      titol: 'EL GIGANTE NOBLE LO HA VUELTO A HACER',
      url: 'https://youtu.be/SN3saeWHMIw',
      categoria: { nom: 'Entreteniment' },
      tipusUsuaris: [{ tipus: 'Adult' }],
    } as Contingut,
  ];
  constructor() {}

  obtenirTotsContinguts(): Observable<Contingut[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.continguts);
    });
  }

  obtenirContingutsFavorits(usuari: Usuari): Observable<Contingut[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.continguts);
    });
  }

  obtenirContingutsCategoriesFavorites(usuari: Usuari): Observable<Contingut[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.continguts);
    });
  }

  afegirCategoriaFavorita(cat: Categoria, usuari: Usuari): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      subscriber.next(true);
    });
  }

  afegirContingutFavorit(cont: Contingut, usuari: Usuari): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.continguts.push(cont);
      subscriber.next(true);
    });
  }

  obtenirContingutPerId(url: String): Observable<Contingut> {
    return new Observable<Contingut>((subscriber) => {
      subscriber.next(this.continguts[0]);
    });
  }

  obtenirCategoriesFavorites(usuari: Usuari): Observable<Categoria[]> {
    return new Observable<Categoria[]>((subscriber) => {
      subscriber.next(this.continguts.map((value) => value.categoria));
    });
  }
}
