import { Powerstats } from './../models/Hero';
import { API_URL } from '../utils/key';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url = API_URL.url;
  public powerStats: Powerstats | any = {};
 
  constructor(private http: HttpClient) {}

  public getHero(id:number):Observable<any>
  {
    return this.http.get(this.url+id);
  }

  public getHeroDetail(id:number):Observable<Hero>
  {
    // const hero  = this.http.get(this.url+id);
    // return hero;

    

  
    return this.http.get(this.url+id).pipe(
      
      map((response: any) => {
 
      if(!response){
        throw new Error('Value expected!');
      } else {
        const fullName = 'full-name';
        const {gender, race, height, weight} = response.appearance;
        const {intelligence,strength,speed,durability, power, combat} = response.powerstats;
      
        const formatResult : Hero = {

          id : response.id,
          name : response.name,
          appearance : response.appearance,
          powerstats : response.powerstats,
          biography : response.biography,
          connections : response.connections,
          work: response.work,
          image: response.image,
        
   
      }
    
      return formatResult
    }
  })
  )}
  public getPowerStats(hero:Hero)
  {
    this.powerStats = hero.powerstats
    return this.powerStats;
  }
}
