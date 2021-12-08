import { Categoria } from './categoria';
import { TipusUsuari } from './tipus-usuari';

export interface Contingut {
  titol: string;
  url: string;
  categoria: Categoria;
  tipusUsuaris: TipusUsuari[];
}
