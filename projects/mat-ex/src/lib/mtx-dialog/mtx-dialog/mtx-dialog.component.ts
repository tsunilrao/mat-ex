import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit, Input, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { MtxDialogTitleComponent } from '../mtx-dialog-title/mtx-dialog-title.component';

const DIALOG_VARIANT_ATTRIBUTES = [
  'basic',
  'flat',
  'stroked',
  'raised',
];

const DIALOG_COLOR_ATTRIBUTES = [
  'basic',
  'primary',
  'accent',
  'warn',
];

@Component({
  selector: 'mtx-dialog',
  templateUrl: './mtx-dialog.component.html',
  styleUrls: ['./mtx-dialog.component.scss'],
  host: { class: 'mtx-dialog' },
  encapsulation: ViewEncapsulation.None,
})
export class MtxDialogComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() variant?: string;
  @Input() color?: string;

  @ContentChild(MtxDialogTitleComponent) dialogTitle: MtxDialogTitleComponent
  @ViewChild('container') containerRef: ElementRef;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
    if (!this.variant) this.variant = DIALOG_VARIANT_ATTRIBUTES[0];
    if (!this.color) this.color = DIALOG_COLOR_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    DIALOG_VARIANT_ATTRIBUTES.forEach(attr => {
      if (attr === this.variant) this.hostRef.nativeElement.classList.add('mtx-dialog-' + attr);
    })
    this.onScrollContainer()
  }

  ngAfterContentInit(): void {
    if (this.dialogTitle) {
      this.dialogTitle.variant = this.variant
      this.dialogTitle.color = this.color
    }
  }

  onScrollContainer() {
    const element: Element = this.containerRef.nativeElement
    if (element.scrollTop > 0) element.classList.add('shadow-top'); else element.classList.remove('shadow-top')
    if (element.scrollTop + element.clientHeight < element.scrollHeight) element.classList.add('shadow-bottom'); else element.classList.remove('shadow-bottom')
  }

}
