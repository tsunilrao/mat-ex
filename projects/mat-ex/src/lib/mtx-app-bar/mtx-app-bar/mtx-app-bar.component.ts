import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

const NAV_ATRRIBUTES = [
  { key: 'none' },
  { key: 'menu', icon: 'menu', tooltip: 'Toggle Menu' },
  { key: 'back', icon: 'keyboard_backspace', tooltip: 'Navigate Back' },
  { key: 'parent', icon: 'keyboard_backspace', tooltip: 'Navigate Back' },
  { key: 'close', icon: 'close', tooltip: 'Close Dialog' },
]

@Component({
  selector: `mtx-app-bar, mtx-dense-app-bar, mtx-standard-app-bar, mtx-prime-app-bar`,
  templateUrl: './mtx-app-bar.component.html',
  styleUrls: ['./mtx-app-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mtx-app-bar mtx-page-padding mtx-page-full-width mat-elevation-z4',
    '[class.mtx-dense-app-bar]': "selector=='mtx-dense-app-bar'",
    '[class.mtx-standard-app-bar]': "selector=='mtx-standard-app-bar' || selector=='mtx-app-bar'",
    '[class.mtx-prime-app-bar]': "selector=='mtx-prime-app-bar'",
  },
})
export class MtxAppBarComponent implements OnInit, OnChanges {

  @Input() nav;
  @Input() overflow;
  @Input('appBarTitle') appBarTitle: string;
  @Input('app-bar-title') _appBarTitle: string;

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }
  get title(): string { return this.appBarTitle || this._appBarTitle }

  navAttr;

  constructor(private hostRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nav) NAV_ATRRIBUTES.forEach(attr => {
      if (this.nav == attr.key) this.navAttr = attr
    })
  }

  @Output() navclick = new EventEmitter()
  onNavClick(event) {
    this.navclick.emit(event)
    if (this.nav == 'back') window.history.back()
    else if (this.nav == 'parent') this.router.navigate(['..'])

  }

  @Output() menuclick = new EventEmitter()
  onMenuClick(event) {
    this.menuclick.emit(event)
  }
}
