import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ContentChild, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';
import { DialogTitleComponent } from '../dialog-title/dialog-title.component';


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
  host: { class: 'mtx-dialog' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() variant?: string;
  @Input() color?: string;

  @ContentChild(DialogTitleComponent) titleRef: DialogTitleComponent
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
    if (this.titleRef) {
      this.titleRef.variant = this.variant
      this.titleRef.color = this.color
    }
  }


  onScrollContainer() {
    const element: Element = this.containerRef.nativeElement
    if (element.scrollTop > 0) element.classList.add('shadow-top'); else element.classList.remove('shadow-top')
    if (element.scrollTop + element.clientHeight < element.scrollHeight) element.classList.add('shadow-bottom'); else element.classList.remove('shadow-bottom')
  }
}