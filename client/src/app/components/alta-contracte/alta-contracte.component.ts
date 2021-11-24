import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormContracteComponent } from '../form-contracte/form-contracte.component';

@Component({
  selector: 'app-alta-contracte',
  templateUrl: './alta-contracte.component.html',
  styleUrls: ['./alta-contracte.component.css'],
})
export class AltaContracteComponent {
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const ref = this.dialog.open(FormContracteComponent);
  }
}
