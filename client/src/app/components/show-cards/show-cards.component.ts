import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Contingut } from 'src/app/models/contingut';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent implements OnInit, OnDestroy {
  @Input() type = '';
  public continguts: Array<Contingut> = [];
  private subscription!: Subscription;

  constructor(private cont: ContingutsService) {}

  ngOnInit(): void {
    switch (this.type) {
      case 'tots':
        this.subscription = this.cont
          .obtenirTotsContinguts()
          .subscribe((val) => (this.continguts = val));
        break;
      case 'contFav':
        this.subscription = this.cont
          .obtenirContingutsFavorits()
          .subscribe((val) => (this.continguts = val));
        break;
      case 'catFav':
        this.subscription = this.cont
          .obtenirContingutsCategoriesFavorites()
          .subscribe((val) => (this.continguts = val));
        break;
    }
  }

  afegirCatFav(categoria: Categoria): void {
    console.log(categoria);
  }

  afegirContFav(contingut: Contingut): void {
    console.log(contingut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
