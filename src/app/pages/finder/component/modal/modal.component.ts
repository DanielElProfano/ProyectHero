
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


import { Hero, Powerstats } from './../../../../models/Hero';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
 

  @Input() showModal : boolean = false;
  @Input() hero: Hero | any

  @Output()
  powerStats: Powerstats | any= {};
  newHero : Hero | any = {};
  private showModalChange = new EventEmitter<any>();

  public radarChartLabels: Label[] = ['Power', 'Combat', 'Durability', 'Speed', 'Strenght','Intelligence'];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor() {}

  public radarChartOptions: RadialChartOptions = {
    responsive: true,

  };

  ngOnChanges(changes: SimpleChanges): void {
   
    this.newHero = changes.hero.currentValue;
    const powerStats = this.newHero.powerstats
    this.radarChartData[0] = {
      data: [
        Number(powerStats.power),
        Number(powerStats.combat),
        Number(powerStats.durability),
        Number(powerStats.speed),
        Number(powerStats.strength),
        Number(powerStats.intelligence),

      ],
     
      borderColor: '#000',

   
      label: this.newHero.name
    };
    
    
  }
 
  public getShowErrorChange(): any {
    debugger;
    return this.showModalChange;
  }

  public closeModal(): void {
    
    this.showModalChange.emit(!this.showModal);
  }

  public getShowModal(): any {
    debugger;
    return this.showModalChange;
  }

  public closeShowModal(): void {
    debugger
    this.showModalChange.emit(!this.showModal);
  }
  ngOnInit(): void {}
  }
    
    
    
 
