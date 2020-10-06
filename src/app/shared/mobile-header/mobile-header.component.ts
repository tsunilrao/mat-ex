import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtx-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  host: {class:'mtx-mobile-header mtx-primary-700-secondary'},
})
export class MobileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
