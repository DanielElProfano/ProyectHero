import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

import { HeroService } from './../../../service/hero.service';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  public hero: Hero[] = [] // Has array of heroes to show on page
  public heroDetail: any;

  @Input() public showModal : boolean = false;

  constructor( private heroService : HeroService) { }

  ngOnInit(): void {

    this.showModal = false;
    this.showHeroes();
  }

  private showHeroes(){
    for(let i = 1; i <= 10; i++)
      {
          this.heroService.getHero(i).subscribe( (result: Hero) => {
          this.hero.push(result);
      })
      }
    }
  public getHeroDetails(id: any): void{
    
    this.heroService.getHeroDetail(id).subscribe((result => {
      this.heroDetail = result;
      this.showModal = true;
 
    }))

  }

}
