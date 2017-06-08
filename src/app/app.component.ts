import { Component } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { HeroserviceService } from './services/heroservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroserviceService],        // Providers is needed
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
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    `
})
export class AppComponent {

  title: string;
  // hero: Hero;                    //--> Obsolete
  selectedHero: Hero;

  heroes: Hero[];                 // Our data will come here.  Initializing an empty array.

  // Injection of the service
  constructor(private heroService: HeroserviceService) {
  
  // Set the initial properties
  this.title = 'Tour of Heroes';
/*  this.selectedHero = {           // Do not initialize the selectedHero, user has to select before details are displayed
    id: 1,
    name: 'Fred the Horrible'
  }*/

  this.heroes = this.heroService.getHeroes();

*****CONTINUE FROM HERE: ngOnInit lifecycle hook
  https://angular.io/docs/ts/latest/tutorial/toh-pt4.html

  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}







