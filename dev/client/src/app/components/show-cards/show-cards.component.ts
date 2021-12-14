import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contingut } from 'src/app/models/contingut';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent {
  @Input() continguts: Contingut[] = [];

  constructor(private router: Router) {}

  goToContingut(contingut: Contingut) {
    this.router.navigate(['/contingut'], {
      queryParams: {
        idContingut: contingut.idContingut,
        titol: contingut.titol,
        url: contingut.url,
        nomCategoria: contingut.nomCategoria,
      },
    });
  }
}
