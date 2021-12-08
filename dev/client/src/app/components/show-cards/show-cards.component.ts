import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent implements OnInit, OnDestroy {
  @Input() type = '';
  public continguts: Contingut[] = [];
  private subscription!: Subscription;

  constructor(private cont: ContingutsService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    switch (this.type) {
      case 'tots':
        this.subscription = this.cont
          .obtenirTotsContinguts()
          .subscribe((val) => (this.continguts = val));
        break;
      case 'contFav':
        this.subscription = this.cont
          .obtenirContingutsFavorits(this.auth.getCurrentUser())
          .subscribe((val) => (this.continguts = val));
        break;
      case 'catFav':
        this.subscription = this.cont
          .obtenirContingutsCategoriesFavorites(this.auth.getCurrentUser())
          .subscribe((val) => (this.continguts = val));
        break;
    }
  }

  goToContingut(url: String) {
    this.router.navigate(['/contingut'], { queryParams: { videoUrl: url } });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
