import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Factura from 'src/app/models/factura';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent implements OnInit {
  public factures: Factura[] = [];
  public idContracte: number = 0;
  public preu: number = 0;

  constructor(
    private contractes: ContractesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.preu = params.preu;
      this.idContracte = params.idContracte;
      this.contractes.getFactures(params.idContracte).subscribe((val) => {
        if (val && val.length > 0) this.factures = val;
      });
    });
  }

  public marcarLlegit(idFactura: number): void {
    this.contractes.marcarFacturaLlegida(idFactura).subscribe((res) => {
      if (res) this.router.navigate(['/contractes']);
    });
  }
}
