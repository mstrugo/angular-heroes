import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {
    // sync function
    // this.heroes = this.heroService.getHeroes();

    // Observable function
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Removed due to router navigation
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}
