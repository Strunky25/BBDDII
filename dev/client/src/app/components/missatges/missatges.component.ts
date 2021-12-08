import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MissatgesService } from 'src/app/services/missatges/missatges.service';

@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.component.html',
  styleUrls: ['./missatges.component.css'],
})
export class MissatgesComponent implements OnInit {
  missatges: string[] = [];

  constructor(private auth: AuthService, private miss: MissatgesService) {}

  ngOnInit(): void {
    this.miss
      .getMissatges(this.auth.getCurrentUser())
      .subscribe((val) => (this.missatges = val));
  }
}
