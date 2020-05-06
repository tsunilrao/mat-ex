import { Component, OnInit, Input, ElementRef } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'flat',
  'raised',
  'stroked',
];

@Component({
  selector: `button[mtx-toolbar-button], mtx-toolbar-button`,
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss'],
  inputs: ['disabled', 'disableRipple', 'color'],

})
export class ToolbarButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;
  @Input() color: string;
  
  @Input() caret: boolean = true;

  _elementRef: ElementRef;
  matButtonStyle = 'mat-button';
  get hasIcon():boolean { return this.icon ? true : false; }
  get hasText(): boolean { return this.text ? true : false; }
  get hasColor():boolean { return this.color ? true : false; }
  get hasOnlyIcon(): boolean { return this.hasIcon && !this.hasText; }
  get hasOnlyText(): boolean { return !this.hasIcon && this.hasText; }
  get hasIconAndText(): boolean { return this.hasIcon && this.hasText; }


  constructor(elementRef: ElementRef) {

    this._elementRef = elementRef;

    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) this.matButtonStyle = this._getStyleClass(attr)
    }
  }

  ngOnInit(): void {
  }

  protected _getStyleClass(attr) {
    return 'mat-' + attr + '-button';
  }

  protected _getHostElement() {
    return this._elementRef.nativeElement;
  }

  protected _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

}
