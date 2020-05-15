import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { DialogTitleComponent } from '../dialog-title/dialog-title.component';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';


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

  @Input() variant?= 'basic';
  @Input() color?= 'basic';

  @ContentChild(DialogTitleComponent) titleRef: DialogTitleComponent

  constructor(private hostRef: ElementRef) {

  }

  ngOnInit(): void {
    if (!this.variant) DIALOG_VARIANT_ATTRIBUTES[0];
    if (!this.color) DIALOG_COLOR_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    DIALOG_VARIANT_ATTRIBUTES.forEach(attr => {
      if (attr === this.variant) this.hostRef.nativeElement.classList.add('mtx-dialog-' + attr);
    })
  }

  ngAfterContentInit(): void {
    if (this.titleRef) {
      this.titleRef.variant = this.variant
      this.titleRef.color = this.color
    }
  }

}
