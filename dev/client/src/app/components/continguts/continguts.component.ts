import { Component, OnInit } from '@angular/core';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-continguts',
  templateUrl: './continguts.component.html',
  styleUrls: ['./continguts.component.css'],
})
export class ContingutsComponent implements OnInit {
  hasContracte: boolean = false;

  constructor(private contractes: ContractesService) {}

  ngOnInit(): void {
    this.contractes.getContractes().subscribe((res) => {
      if (res && res.length > 0) {
        this.hasContracte = true;
      }
    });
  }
}
