import { Component, OnInit } from '@angular/core';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-continguts',
  templateUrl: './continguts.component.html',
  styleUrls: ['./continguts.component.css'],
})
export class ContingutsComponent implements OnInit {
  hasContracte: boolean = false;
  private user!: Usuari;

  constructor(
    private auth: AuthService,
    private contractes: ContractesService
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    console.log(this.user);
    this.contractes.hasContracte(this.user).subscribe((val) => {
      this.hasContracte = val;
    });
  }
}
