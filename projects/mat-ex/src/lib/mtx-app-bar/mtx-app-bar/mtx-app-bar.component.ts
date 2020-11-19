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
  host: { class: 'mtx-app-bar mtx-page-padding mtx-page-full-width mat-elevation-z4' },
  encapsulation: ViewEncapsulation.None
})
export class MtxAppBarComponent implements OnInit, OnChanges {

  // ## size
  // Supports `standard`, `dense`, `prominent`, `prominent-2`
  @Input() size;

  // ## nav
  // Supports `none`, `menu`, `back` and `close`
  @Input() nav;

  @Input() overflow;
  
  @Input('appBarTitle') title: string;

  navAttr;
  prominentFlex: number = 0;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nav) NAV_ATRRIBUTES.forEach(attr => {
      if (this.nav == attr.key) this.navAttr = attr
    })

    if (this.size == 'dense') this.hostRef.nativeElement.classList.add('mtx-app-bar-dense');
    else this.hostRef.nativeElement.classList.remove('mtx-app-bar-dense');
    if (this.size == 'prominent') this.hostRef.nativeElement.classList.add('mtx-app-bar-prominent');
    else this.hostRef.nativeElement.classList.remove('mtx-app-bar-prominent');
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
