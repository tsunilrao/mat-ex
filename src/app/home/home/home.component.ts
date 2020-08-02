import { Component, OnInit } from '@angular/core';
import { version } from 'projects/mat-ex/package.json';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'home'}
})
export class HomeComponent implements OnInit {

  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
