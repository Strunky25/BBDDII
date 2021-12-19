import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContractesService } from 'src/app/services/contractes/contractes.service';
import { FormContracteComponent } from '../form-contracte/form-contracte.component';

@Component({
  selector: 'app-alta-contracte',
  templateUrl: './alta-contracte.component.html',
  styleUrls: ['./alta-contracte.component.css'],
})
export class AltaContracteComponent {
  constructor(
    public dialog: MatDialog,
    private contractes: ContractesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  public openDialog(): void {
    const ref = this.dialog.open(FormContracteComponent);

    ref.afterClosed().subscribe((val: string) => {
      this.contractes.createContracte(val).subscribe((res) => {
        if (res) {
          this.router.navigate(['/contractes']);
        } else {
          this._snackBar.open(
            'Error creant el contracte, intenta-ho una altra vegada',
            "D'acord",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration: 5000,
            }
          );
        }
      });
    });
  }
}
