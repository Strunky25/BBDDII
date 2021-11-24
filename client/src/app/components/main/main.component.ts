import { Component } from '@angular/core';
import { Usuari } from 'src/app/models/usuari';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public user: Usuari | undefined;
  public teContracte: boolean = false;

  constructor(private auth: AuthService) {
    this.user = this.auth.getCurrentUser();
  }
}
