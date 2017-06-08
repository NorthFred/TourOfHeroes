import { Injectable } from '@angular/core';

import { Hero } from '../hero-detail/hero';
import { HEROES } from './mock-data';           // This is now a constant with mock data

import { Logger } from './logger.service';

@Injectable()
export class HeroserviceService {

  constructor(private logger: Logger) { }

  // function to get the Hero array data.  Function returns a Hero[]
  getHeroes(): Promise<Hero[]> {
    /*
    A Promise essentially promises to call back when the results are ready. 
    You ask an asynchronous service to do some work and give it a callback function.
    The service does that work and eventually calls the function with the results or an error.
    */
    this.logger.log('Getting heroes from service...');
    return Promise.resolve(HEROES);
    // Moving the mock data to the service, for future testing and implementations.
  }

  //Simulate a slow connection.
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => 
      { setTimeout(() => resolve(this.getHeroes()), 5000); 
      });
  }

}
