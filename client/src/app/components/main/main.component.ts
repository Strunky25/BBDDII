import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContractesService } from 'src/app/services/contractes/contractes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
