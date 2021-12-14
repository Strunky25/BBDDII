import { Component, OnInit } from '@angular/core';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css'],
})
export class TabBarComponent implements OnInit {
  public contingutsVisualitzables: Contingut[] = [];
  public contingutsFavorits: Contingut[] = [];
  public contingutsCategoriesFavorites: Contingut[] = [];

  constructor(private conts: ContingutsService, private auth: AuthService) {}

  ngOnInit(): void {
    this.conts
      .obtenirContingutsVisualitzables()
      .subscribe((val) => (this.contingutsVisualitzables = val));
    this.conts.obtenirContingutsFavorits().subscribe((val) => {
      this.contingutsFavorits = val;
      this.auth.getCurrentUser().contingutsFavorits = this.contingutsFavorits;
    });
    this.conts
      .obtenirContingutsCategoriesFavorites()
      .subscribe((val) => (this.contingutsCategoriesFavorites = val));
  }
}
