import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  homeSelected: boolean = true;
  artistsSelected: boolean = false;
  aboutSelected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  selectedFunction(x: number) {
    this.homeSelected = false;
    this.artistsSelected = false;
    this.aboutSelected = false;
    console.log('clicked');
    console.log(x);
    console.log(this.router.url);
    switch (x) {
      case 1: {
        this.homeSelected = true;
        break;
      }
      case 2: {
        this.artistsSelected = true;
        break;
      }
      case 3: {
        this.aboutSelected = true;
        break;
      }
      default: {
        console.log('Default Case selected in switch case');
      }
    }
  }
}
