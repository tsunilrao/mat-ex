import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-scrollview-card',
  templateUrl: './home-scrollview-card.component.html',
  styleUrls: ['./home-scrollview-card.component.scss']
})
export class HomeScrollviewCardComponent implements OnInit {

  @Input() value: string;
  @Input() info: string;
  @Input() colorClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
