import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

const DIALOG_COLOR_ATTRIBUTES = [
  'basic',
  'primary',
  'accent',
  'warn',
];

@Component({
  selector: `mtx-dialog, mtx-raised-dialog, mtx-stroked-dialog`,
  templateUrl: './mtx-dialog.component.html',
  styleUrls: ['./mtx-dialog.component.scss'],
  host: { 
    class: 'mtx-dialog',
    '[class.mtx-basic-dialog]': "selector=='mtx-dialog'",
    '[class.mtx-raised-dialog]': "selector=='mtx-raised-dialog'", 
    '[class.mtx-stroked-dialog]': "selector=='mtx-stroked-dialog'", 
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxDialogComponent implements OnInit, AfterViewInit {

  @Input('title-text') title?: string;
  @Input() color?: string;

  @ViewChild('container') containerRef: ElementRef;

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
    if (!this.color) this.color = DIALOG_COLOR_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    this.onScrollContainer()
  }

  onScrollContainer() {
    const element: Element = this.containerRef.nativeElement
    if (element.scrollTop > 0) element.classList.add('shadow-top'); else element.classList.remove('shadow-top')
    if (element.scrollTop + element.clientHeight < element.scrollHeight) element.classList.add('shadow-bottom'); else element.classList.remove('shadow-bottom')
  }

}
