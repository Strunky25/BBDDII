import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contracte } from 'src/app/models/contracte';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-contractes',
  templateUrl: './contractes.component.html',
  styleUrls: ['./contractes.component.css'],
})
export class ContractesComponent implements OnInit {
  public contractes: Contracte[] = [];
  public preu: number[] = [];

  constructor(private cont: ContractesService, private router: Router) {}

  ngOnInit(): void {
    this.cont.getContractes().subscribe((value) => {
      if (value && value.length > 0) {
        this.contractes = value;
        this.contractes.forEach((contracte, i) => {
          if (contracte.tipusContracte.toLowerCase() === 'mensual') {
            this.preu[i] = 15;
          } else {
            this.preu[i] = 40;
          }
        });
      }
    });
  }

  public veureFactures(idContracte: number, preu: number): void {
    this.router.navigate(['/factures'], { queryParams: { idContracte, preu } });
  }
}
