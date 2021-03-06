import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Contingut } from 'src/app/models/contingut';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContingutsService } from 'src/app/services/continguts/continguts.service';

@Component({
  selector: 'app-contingut',
  templateUrl: './contingut.component.html',
  styleUrls: ['./contingut.component.css'],
})
export class ContingutComponent implements OnInit {
  public contFav: boolean = false;
  public catFav: boolean = false;
  public contingut: Contingut = {
    idContingut: 0,
    titol: '',
    url: '',
    nomCategoria: '',
  } as Contingut;
  public readonly likeButtonColor: string = this.contFav ? 'warn' : 'primary';
  public readonly addButtonColor: string = this.catFav ? 'warn' : 'primary';
  public isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private conts: ContingutsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.contingut = params as Contingut;
    });
    this.contFav =
      this.auth
        .getCurrentUser()
        .contingutsFavorits.filter(
          (value) => value.idContingut === this.contingut.idContingut
        ).length > 0;
    this.catFav = this.auth
      .getCurrentUser()
      .categoriesFavorites.includes(this.contingut.nomCategoria);
    this.isAdmin = this.auth.getCurrentUser().administrador;
  }

  public manageFavClick(): void {
    this.contFav ? this.deleteContFav() : this.addContFav();
  }

  public manageCatClick(): void {
    this.catFav ? this.deleteCatFav() : this.addCatFav();
  }

  private deleteContFav(): void {
    this.conts
      .llevarContingutFavorit(this.contingut.idContingut!)
      .subscribe((res) => {
        if (res) {
          this.contFav = false;
        } else {
          this._snackBar.open(
            'Error llevant el contingut de favorits, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      });
  }

  private addContFav(): void {
    this.conts
      .afegirContingutFavorit(this.contingut.idContingut!)
      .subscribe((res) => {
        if (res) {
          this.contFav = true;
        } else {
          this._snackBar.open(
            'Error afegint el contingut a favorits, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      });
  }

  private deleteCatFav(): void {
    this.conts
      .llevarCategoriaFavorita(this.contingut.nomCategoria)
      .subscribe((res) => {
        if (res) {
          this.catFav = false;
        } else {
          this._snackBar.open(
            'Error llevant la categoria de favorits, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      });
  }

  private addCatFav(): void {
    this.conts.afegirCategoriaFavorita(this.contingut.nomCategoria).subscribe(
      (res) => {
        if (res) {
          this.catFav = true;
        } else {
          this._snackBar.open(
            'Error afegint la categoria a favorits, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      },
      () =>
        this._snackBar.open(
          'Error afegint la categoria a favorits, intenta-ho una altra vegada',
          "D'acord",
          {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
          }
        )
    );
  }

  public deleteContingut(): void {
    this.conts.llevarContingut(this.contingut.idContingut!).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['/continguts']);
        } else {
          this._snackBar.open(
            'Error eliminant el contingut, intenta-ho una altra vegada',
            "D'acord",
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 5000,
            }
          );
        }
      },
      () =>
        this._snackBar.open(
          'Error eliminant el contingut, intenta-ho una altra vegada',
          "D'acord",
          {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
          }
        )
    );
  }
}
