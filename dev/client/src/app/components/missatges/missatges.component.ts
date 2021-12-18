import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Missatge from 'src/app/models/missatge';
import { MissatgesService } from 'src/app/services/missatges/missatges.service';

@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.component.html',
  styleUrls: ['./missatges.component.css'],
})
export class MissatgesComponent implements OnInit {
  public missatges: Missatge[] = [];

  constructor(private miss: MissatgesService, private router: Router) {}

  ngOnInit(): void {
    this.miss.getMissatges().subscribe((res) => {
      if (res && res.length > 0) this.missatges = res;
    });
  }

  public marcarMissatgeLlegit(idMissatge: number): void {
    this.miss
      .marcarLlegit(idMissatge)
      .subscribe(
        () =>
          (this.missatges = this.missatges.filter(
            (missatge) => missatge.idMissatge !== idMissatge
          ))
      );
  }

  public goToContingutMissatge(missatge: Missatge): void {
    this.router.navigate(['/contingut'], {
      queryParams: {
        idContingut: missatge.idContingut,
        titol: missatge.titol,
        url: missatge.url,
        nomCategoria: missatge.nomCategoria,
      },
    });
  }
}
