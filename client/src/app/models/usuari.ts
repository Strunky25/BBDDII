import { Contracte } from './contracte';

export interface Usuari {
  nomUsuari: String;
  contrassenya: String;
  nom: String;
  llinatges: String;
  contracte?: Contracte;
}
