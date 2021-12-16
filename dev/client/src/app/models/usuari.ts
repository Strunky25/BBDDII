import { Contingut } from './contingut';
import { Contracte } from './contracte';

export interface Usuari {
  nomUsuari: string;
  contrassenya: string;
  nom: string;
  llinatges: string;
  tipusUsuari: string;
  contingutsFavorits: Contingut[];
  categoriesFavorites: string[];
  administrador: boolean;
  contracte?: Contracte;
}
