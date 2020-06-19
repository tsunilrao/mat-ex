import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mtx-app-bar',
  templateUrl: './mtx-app-bar.component.html',
  styleUrls: ['./mtx-app-bar.component.scss'],
  host: {class: 'mtx-app-bar'},
  encapsulation: ViewEncapsulation.None
})
export class MtxAppBarComponent implements OnInit, OnChanges {

  @Input() color;
  @Input() matMenu;
  @Input() nav;

  navIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nav == 'none') this.navIcon = undefined
    if (this.nav == 'menu') this.navIcon = 'menu'
    if (this.nav == 'back') this.navIcon = 'arrow_back'
    if (this.nav == 'close') this.navIcon = 'close'
  }  

  @Output() navclick = new EventEmitter()
  onNavClick(event) {
    this.navclick.emit(event)
  }

  @Output() menuclick = new EventEmitter()
  onMenuClick(event) {
    this.menuclick.emit(event)
  }
}
