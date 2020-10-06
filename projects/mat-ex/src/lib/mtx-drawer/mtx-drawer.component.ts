import { Component, OnInit, ViewEncapsulation, ElementRef, Input } from '@angular/core';

@Component({
  selector: `mtx-drawer, mtx-drawer-left, mtx-drawer-right`,
  templateUrl: './mtx-drawer.component.html',
  styleUrls: ['./mtx-drawer.component.scss'],
  host:{ 
    class: 'mtx-drawer-backdrop',
    '[class.mtx-drawer-overlay]':"mode=='overlay'",
    '[class.mtx-drawer-side]':"mode=='side'",
    '[class.mtx-drawer-open]':"opened",
    '(click)':"close()"
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxDrawerComponent implements OnInit {

  @Input() mode?:string='side'

  opened: boolean = false

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

  open() {
    if (!this.opened) this.toggle()
  }

  close() {
    if (this.opened) this.toggle()
  }

  toggle() {
    this.opened = !this.opened
  }

  onDrawerClick(event: Event) {
    event.stopPropagation();
  }
}
