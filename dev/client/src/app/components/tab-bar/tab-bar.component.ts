import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';
import { MissatgesService } from 'src/app/services/missatges/missatges.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css'],
})
export class TabBarComponent implements OnInit {
  public contingutsVisualitzables: Contingut[] = [];
  public contingutsFavorits: Contingut[] = [];
  public contingutsCategoriesFavorites: Contingut[] = [];
  @Output() nMissatges = new EventEmitter<number>();

  constructor(
    private conts: ContingutsService,
    private auth: AuthService,
    private miss: MissatgesService
  ) {}

  ngOnInit(): void {
    this.conts.obtenirCategoriesFavorites().subscribe((val) => {
      if (val && val.length > 0) {
        this.auth.getCurrentUser().categoriesFavorites = val.map(
          (val) => val.nomCategoria
        );
      } else {
        this.auth.getCurrentUser().categoriesFavorites = [];
      }
    });
    this.conts.obtenirContingutsVisualitzables().subscribe((val) => {
      if (val && val.length > 0) this.contingutsVisualitzables = val;
    });
    this.conts.obtenirContingutsFavorits().subscribe((val) => {
      if (val && val.length > 0) {
        this.contingutsFavorits = val;
        this.auth.getCurrentUser().contingutsFavorits = this.contingutsFavorits;
      } else {
        this.auth.getCurrentUser().contingutsFavorits = [];
      }
    });
    this.conts.obtenirContingutsCategoriesFavorites().subscribe((val) => {
      if (val && val.length > 0) {
        this.contingutsCategoriesFavorites = val;
      }
    });
    this.miss
      .getMissatges()
      .subscribe((val) => this.nMissatges.emit(val.length));
  }
}
