import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-contingut',
  templateUrl: './contingut.component.html',
  styleUrls: ['./contingut.component.css'],
})
export class ContingutComponent implements OnInit {
  public contingut!: Contingut;
  public contFav: boolean = false;
  public catFav: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private conts: ContingutsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.contingut = params as Contingut;
      this.contFav =
        this.auth
          .getCurrentUser()
          .contingutsFavorits?.filter(
            (value) => value.idContingut === this.contingut.idContingut
          ).length !== 0;
    });
  }

  public toggleContFav(): void {
    this.contFav ? this.deleteContFav() : this.addContFav();
  }

  private deleteContFav(): void {
    this.conts.llevarContingutFavorit(this.contingut.idContingut);
  }

  private addContFav(): void {
    this.conts.afegirContingutFavorit(this.contingut.idContingut);
  }

  public toggleCatFav(): void {}
}
