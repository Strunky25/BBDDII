import { Categoria } from './categoria';
import { TipusUsuari } from './tipus-usuari';

export interface Contingut {
  titol: String;
  url: String;
  categoria: Categoria;
  tipusUsuaris: Array<TipusUsuari>;
}
