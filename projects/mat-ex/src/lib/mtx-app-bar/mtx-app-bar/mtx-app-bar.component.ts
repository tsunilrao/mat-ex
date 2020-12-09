import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter, ElementRef } from '@angular/core';

const NAV_ATRRIBUTES = [
  { key: 'none' },
  { key: 'menu', icon: 'menu', tooltip: 'Toggle Menu' },
  { key: 'back', icon: 'keyboard_backspace', tooltip: 'Navigate Back' },
  { key: 'close', icon: 'close', tooltip: 'Close Dialog' },
]

@Component({
  selector: 'mtx-app-bar',
  templateUrl: './mtx-app-bar.component.html',
  styleUrls: ['./mtx-app-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { 
    class: 'mtx-app-bar mtx-page-padding mtx-page-full-width mat-elevation-z4',
    '[class.mtx-standard-app-bar]': "size=='standard'",
    '[class.mtx-dense-app-bar]': "size=='dense'",
    '[class.mtx-prominent-app-bar]': "size=='prominent'"
 },
})
export class MtxAppBarComponent implements OnInit, OnChanges {

  // ## size
  // Supports `standard`, `dense`, `prominent`, `prominent-2`
  @Input() size = 'standard';

  // ## nav
  // Supports `none`, `menu`, `back` and `close`
  @Input() nav;

  @Input() overflow;
  
  @Input('appBarTitle') title: string;

  navAttr;
  prominentFlex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nav) NAV_ATRRIBUTES.forEach(attr => {
      if (this.nav == attr.key) this.navAttr = attr
    })

    this.prominentFlex = this.size == 'prominent' ? 1 : 0
  }

  @Output() navclick = new EventEmitter()
  onNavClick(event) {
    this.navclick.emit(event)
    if (this.nav == 'back') window.history.back()
  }

  @Output() menuclick = new EventEmitter()
  onMenuClick(event) {
    this.menuclick.emit(event)
  }
}
