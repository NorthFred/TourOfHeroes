import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>Overview of heroes</h2>

    <div class="showHeroList">
      <ul class="heroes">
        <li *ngFor="let hero of heroes" 
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    </div>
    
    <div class="showHeroDetails" *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div><label>name: </label>{{selectedHero.name}}</div>
      <div>
        <label>name: </label>
        <input id="heroname" type="text" class="form-control" name="selectedHero.name" placeholder="hero's name" [(ngModel)]="selectedHero.name" required>
      </div>
    </div>
    `
})
export class AppComponent {

  title: string;
  // hero: Hero;                    //--> Obsolete
  selectedHero: Hero;

  heroes = HEROES;

  constructor() {
  
  // Set the initial properties
  this.title = 'Tour of Heroes';
/*  this.selectedHero = {           // Do not initialize the selectedHero, user has to select before details are displayed
    id: 1,
    name: 'Fred the Horrible'
  }*/
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}







