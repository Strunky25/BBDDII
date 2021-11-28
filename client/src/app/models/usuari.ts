import { Contracte } from './contracte';

export interface Usuari {
  nomUsuari: string;
  contrassenya: string;
  nom: string;
  llinatges: string;
  contracte?: Contracte;
}
