import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MissatgesService } from 'src/app/services/missatges/missatges.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nMissatges: number = 1;
  constructor(private miss: MissatgesService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.miss
      .getMissatges(this.auth.getCurrentUser())
      .subscribe((val) => (this.nMissatges = val.length));
  }

  navigateToMissatges(): void {
    this.router.navigate(['/missatges']);
  }
}
