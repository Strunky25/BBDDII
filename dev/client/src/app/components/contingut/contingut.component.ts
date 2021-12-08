import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-contingut',
  templateUrl: './contingut.component.html',
  styleUrls: ['./contingut.component.css'],
})
export class ContingutComponent implements OnInit {
  contingut!: Contingut;
  constructor(
    private continguts: ContingutsService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.continguts.obtenirContingutPerId(params.videoUrl).subscribe((value) => {
        this.contingut = value;
      });
    });
  }

  afegirCatFav(categoria: Categoria): void {
    this.continguts.afegirCategoriaFavorita(categoria, this.auth.getCurrentUser());
  }

  afegirContFav(contingut: Contingut): void {
    this.continguts.afegirContingutFavorit(contingut, this.auth.getCurrentUser());
  }
}
