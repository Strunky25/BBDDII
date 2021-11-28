import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-categories-favorites',
  templateUrl: './categories-favorites.component.html',
  styleUrls: ['./categories-favorites.component.css']
})
export class CategoriesFavoritesComponent implements OnInit {
  categoriesFavorites: Categoria[] = [];

  constructor(private conts: ContingutsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.conts.obtenirCategoriesFavorites(this.auth.getCurrentUser()).subscribe((value) => this.categoriesFavorites = value);
  }

}
