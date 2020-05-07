import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: `button[mtx-toolbar-button], mtx-toolbar-button`,
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss'],
})
export class ToolbarButtonComponent implements OnChanges {

  @Input() icon: string;
  @Input() text: string;
  @Input() variant: 'flat' | 'raised' | 'stroked';
  @Input() dropdown: boolean;
  @Input() vertical: boolean;
  @Input() color;
  @Input() disabled;
  @Input() disableRipple;

  elementRef: ElementRef;
  matButtonClass: string;

  get hasIcon(): boolean { return this.icon ? true : false; }
  get hasText(): boolean { return this.text ? true : false; }
  get hasOnlyIcon(): boolean { return this.hasIcon && !this.hasText; }
  get hasOnlyText(): boolean { return !this.hasIcon && this.hasText; }
  get hasIconAndText(): boolean { return this.hasIcon && this.hasText; }
  get hasDropdown(): boolean { return this.dropdown ? true : false; }
  get isVertical(): boolean { return this.vertical ? true : false; }

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dropdown = (this.dropdown==null || this.dropdown===false || (this.dropdown as unknown)==='false') ? false : true
    this.vertical = (this.vertical==null || this.vertical===false || (this.vertical as unknown)==='false') ? false : true
    this.matButtonClass = this.getVariantClass(this.variant)
  }

  getVariantClass(variant) {
    var variantClass: string = 'mat-button';
    if (variant) variantClass = 'mat-' + variant + '-button'
    return variantClass
  }

}
