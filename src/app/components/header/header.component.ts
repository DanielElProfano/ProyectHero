import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  home: string = 'Home';
  finder: string = 'Finder';
  joinUs: string = 'Join us';
  chariot: string = 'chariot';
  mainTitle: string = 'Hero for Hire';


  
  constructor() { }

  ngOnInit(): void {}

}
