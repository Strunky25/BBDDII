import { Component, OnInit } from '@angular/core';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-continguts',
  templateUrl: './continguts.component.html',
  styleUrls: ['./continguts.component.css'],
})
export class ContingutsComponent implements OnInit {
  public hasContracte: boolean = false;
  public nMissatges: number = 0;

  constructor(private contractes: ContractesService) {}

  ngOnInit(): void {
    this.contractes.getContractes().subscribe((res) => {
      if (res && res.length > 0) {
        this.hasContracte = true;
      }
    });
  }

  public augmentarNMissatges(val: number): void {
    this.nMissatges = val;
  }
}
