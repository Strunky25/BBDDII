import { Component } from '@angular/core';
import { Contracte } from 'src/app/models/contracte';
import { TipusContracte } from 'src/app/models/tipus-contracte';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-form-contracte',
  templateUrl: './form-contracte.component.html',
  styleUrls: ['./form-contracte.component.css'],
})
export class FormContracteComponent {
  public dataAlta: Date = new Date();
  public tipusContracte!: TipusContracte;

  constructor(private contractes: ContractesService) {}

  crearContracte(): void {
    this.contractes.createContracte({ tipus: this.tipusContracte, dataAlta: this.dataAlta, idContracte: Math.random() } as Contracte);
  }
}
