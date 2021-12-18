import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';
import { MissatgesService } from 'src/app/services/missatges/missatges.service';
import { FormContingutComponent } from '../form-contingut/form-contingut.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public nMissatges: number = 0;
  public isAdmin: boolean = false;

  constructor(
    private miss: MissatgesService,
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private continguts: ContingutsService
  ) {}

  ngOnInit(): void {
    this.miss.getMissatges().subscribe((val) => (this.nMissatges = val.length));
    this.isAdmin = this.auth.getCurrentUser().administrador;
  }

  public navigateToMissatges(): void {
    this.router.navigate(['/missatges']);
  }

  public navigateToContinguts(): void {
    this.router.navigate(['/continguts']);
  }

  public afegirContingut(): void {
    const ref = this.dialog.open(FormContingutComponent);

    ref.afterClosed().subscribe((val) => {
      console.log(val);
      this.continguts.afegirContingut(val).subscribe((res) => {
        if (res) {
          this.router.navigate(['/continguts']);
        }
      });
    });
  }
}
