import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-interactive',
  templateUrl: './app-bar-interactive.component.html',
  styleUrls: ['./app-bar-interactive.component.scss']
})
export class AppBarInteractiveComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  size: string[] = ['Standard', 'Dense', 'Prominent'];
  sizeIndex: number = 0;
  flipSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.size.length
  }

  navigation: string[] = ['Menu', 'Back', 'Close', 'None']
  navigationIndex: number = 0;
  flipNavigation() {
    this.navigationIndex = (this.navigationIndex + 1) % this.navigation.length
  }
}
