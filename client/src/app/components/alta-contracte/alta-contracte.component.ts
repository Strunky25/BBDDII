import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipusContracte } from 'src/app/models/tipus-contracte';
import { ContractesService } from 'src/app/services/contractes/contractes.service';
import { FormContracteComponent } from '../form-contracte/form-contracte.component';

@Component({
  selector: 'app-alta-contracte',
  templateUrl: './alta-contracte.component.html',
  styleUrls: ['./alta-contracte.component.css'],
})
export class AltaContracteComponent {
  constructor(
    public dialog: MatDialog,
    private contractes: ContractesService
  ) {}

  public openDialog(): void {
    const ref = this.dialog.open(FormContracteComponent);

    ref
      .afterClosed()
      .subscribe((val: { dataAlta: Date; tipusContracte: String }) => {
        this.contractes.createContracte({
          idContracte: this.contractes.contractes.length,
          tipus: {
            tipus: val.tipusContracte,
            preu: val.tipusContracte === 'mensual' ? 15 : 40,
          } as TipusContracte,
          dataAlta: val.dataAlta,
        });
      });
  }
}
