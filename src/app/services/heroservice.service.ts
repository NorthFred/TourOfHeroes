import { Injectable } from '@angular/core';

import { Hero } from '../hero-detail/hero';
import { HEROES } from './mock-data';           // This is now a constant with mock data

@Injectable()
export class HeroserviceService {

  constructor() { }

  // function to get the Hero array data.  Function returns a Hero[]
  getHeroes(): Hero[] {
    return HEROES;
    // Moving the mock data to the service, for future testing and implementations.
  }

}
