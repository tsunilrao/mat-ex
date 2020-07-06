import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'mtx-expansion',
  templateUrl: './mtx-expansion.component.html',
  styleUrls: ['./mtx-expansion.component.scss'],
  host: {class:'mtx-expansion'},
  encapsulation: ViewEncapsulation.None
})
export class MtxExpansionComponent implements OnInit {

  _expanded: boolean = false;
  get expanded() { return this._expanded }
  set expanded(value:boolean) {
    this._expanded = value
    if (value) this.hostRef.nativeElement.classList.add('mtx-expansion-expanded')
    else this.hostRef.nativeElement.classList.remove('mtx-expansion-expanded')
    this.panelHeight = value ? this.panelRef.nativeElement.scrollHeight : 0
  }

  panelHeight: number = 0;

  @ViewChild('panel') panelRef: ElementRef

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

  public toggle() {
    this.expanded = !this.expanded;
  }

  public expand() {
    this.expanded = true;
  }

  public collapse() {
    this.expanded = false;
  }
}
