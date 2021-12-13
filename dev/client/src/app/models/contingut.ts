import { Categoria } from './categoria';

export interface Contingut {
  titol: string;
  url: string;
  categoria: Categoria;
  tipusUsuaris: string[];
}
