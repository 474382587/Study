import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
// export class HeroesComponent implements OnInit {
//   hero: Hero = {
//     id: 1,
//     name: 'Windstorm'
//   };
//   heroes: Hero[];
//   selectedHero: Hero;
//   private heroService: HeroService;
//   constructor(heroService: HeroService) {
//     this.heroService = heroService;
//   }
//   getHeroes(): void {
//     this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
//   }
//   ngOnInit() {
//     this.getHeroes();
//   }
//   showHeroDetails(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
