import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.scss'],
  host: { class:'mtx-page-full-width'}
})
export class HomeHeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
