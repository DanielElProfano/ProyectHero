import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() {}
  ngOnInit(): void {}
    swiperArray : string[] = [ 
      '../../../../assets/img/home/homelander-the_boys.jpg_481262547.jpg',
      "../../../../assets/img/home/i-train.jpg"
    ];
  //  public swiper = new Swiper('.swiper-container',{
  //   speed: 400,
  //   spaceBetween: 100
  //  });
   public config: SwiperConfigInterface = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    spaceBetween: 400,
    speed:5000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
      
    },
    autoplay: {​​​​​​​​
                delay:2000, 
                stopOnLastSlide:false, 
                reverseDirection:false, 
                disableOnInteraction:false}​​​​​​​​

  };

  

}
