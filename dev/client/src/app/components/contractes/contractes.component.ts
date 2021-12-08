import { Component, OnInit } from '@angular/core';
import { Contracte } from 'src/app/models/contracte';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-contractes',
  templateUrl: './contractes.component.html',
  styleUrls: ['./contractes.component.css'],
})
export class ContractesComponent implements OnInit {
  contractes: Contracte[] = [];
  constructor(private cont: ContractesService, private auth: AuthService) {}

  ngOnInit(): void {
    this.cont
      .getContractes(this.auth.getCurrentUser())
      .subscribe((value) => (this.contractes = value));
  }
}
