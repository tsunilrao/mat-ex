import { Component, OnInit } from '@angular/core';
import { version } from 'projects/mat-ex/package.json';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
  host: { class: 'mtx-primary center mat-elevation-z4' }
})
export class FooterSectionComponent implements OnInit {

  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
