import { Component, Input, OnInit } from '@angular/core';
import { Contingut } from 'src/app/models/contingut';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent implements OnInit {
  @Input() type = '';
  public continguts: Array<Contingut> = [];

  constructor(private cont: ContingutsService) {}

  ngOnInit(): void {
    switch (this.type) {
      case 'tots':
        this.cont.obtenirTotsContinguts().subscribe((val) => this.continguts = val);
        break;
      case 'contFav':
        break;
      case 'catFav':
        break;
    }
  }
}
