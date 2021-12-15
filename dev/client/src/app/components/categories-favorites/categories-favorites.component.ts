import { Component, OnInit } from '@angular/core';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-categories-favorites',
  templateUrl: './categories-favorites.component.html',
  styleUrls: ['./categories-favorites.component.css'],
})
export class CategoriesFavoritesComponent implements OnInit {
  categoriesFavorites: string[] = [];

  constructor(private conts: ContingutsService) {}

  ngOnInit(): void {
    this.conts.obtenirCategoriesFavorites().subscribe((value) => {
      if (value && value.length > 0)
        this.categoriesFavorites = value.map((val) => val.nomCategoria);
      else this.categoriesFavorites = [];
    });
  }
}
