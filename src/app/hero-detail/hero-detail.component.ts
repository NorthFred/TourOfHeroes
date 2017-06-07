import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  template: `
      <div class="showHeroDetails" *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>{{hero.name}}</div>
      <div>
        <label>name: </label>
        <input id="heroname" type="text" class="form-control" name="hero.name" placeholder="hero's name" [(ngModel)]="hero.name" required>
      </div>
    </div>
    `
})
export class HeroDetailComponent implements OnInit {

  // Will receive a hero object through the hero input property and bind it with its template
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
