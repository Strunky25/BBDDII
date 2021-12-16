import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contingut',
  templateUrl: './form-contingut.component.html',
  styleUrls: ['./form-contingut.component.css'],
})
export class FormContingutComponent {
  public titol: string = '';
  public url: string = '';
  public categoria: string = '';
  public tipusUsuari: string = '';
  public tipusUsuaris: string[] = ['Adult', 'Adolescent', 'Infantil'];
  public categories: string[] = [
    'Acción',
    'Actualidad',
    'Adulto',
    'Animación',
    'Anime',
    'Aventuras',
    'Binge',
    'Biografía',
    'Ciencia ficción',
    'Comedia',
    'Concurso',
    'Corto',
    'Crimen',
    'Deporte',
    'Documental',
    'Drama',
    'Estilo de vida',
    'Familiar',
    'Fantasía',
    'Ficción',
    'Guerra',
    'Historia',
    'Horror',
    'Infantil',
    'Juvenil',
    'Misterio',
    'Música',
    'Musical',
    'Programa de entrevis',
    'Reality Show',
    'Romance',
    'Sátira',
    'Suspense',
    'Western',
  ];
}
