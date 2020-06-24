import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'mtx-app-bar',
  templateUrl: './mtx-app-bar.component.html',
  styleUrls: ['./mtx-app-bar.component.scss'],
  host: {class: 'mtx-app-bar'},
  encapsulation: ViewEncapsulation.None
})
export class MtxAppBarComponent implements OnInit, OnChanges {

  // ## size
  // Supports `standard`, `dense` and `prominent`
  @Input() size;

  // ## color
  // Supports `none`, `primary`, `accent` and `warn`
  @Input() color;

  // ## nav
  // Supports `none`, `menu`, `back` and `close`
  @Input() nav;

  @Input() overflow;

  navIcon: string;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nav == 'none') this.navIcon = undefined
    if (this.nav == 'menu') this.navIcon = 'menu'
    if (this.nav == 'back') this.navIcon = 'arrow_back'
    if (this.nav == 'close') this.navIcon = 'close'
    if (this.size == 'dense') this.hostRef.nativeElement.classList.add('mtx-app-bar-dense');
    else this.hostRef.nativeElement.classList.remove('mtx-app-bar-dense');
    if (this.size == 'prominent') this.hostRef.nativeElement.classList.add('mtx-app-bar-prominent');
    else this.hostRef.nativeElement.classList.remove('mtx-app-bar-prominent');
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
