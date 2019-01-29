import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) { }

  // sync function
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Observable function
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero ID=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
