import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contracte',
  templateUrl: './form-contracte.component.html',
  styleUrls: ['./form-contracte.component.css'],
})
export class FormContracteComponent {
  public dataAlta!: Date;
  public tipusContracte: String = "mensual";
}
