import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `h1[mtx-dialog-title], mtx-dialog-title, mtx-dialog-content, mtx-dialog-actions`,
  templateUrl: './mtx-dialog-components.component.html',
  styleUrls: ['./mtx-dialog-components.component.scss'],
  host: {
    '[class.mtx-dialog-title]': "selector=='mtx-dialog-title' || (selector=='h1' && titleAttribute)",
    '[class.mtx-dialog-content]': "selector=='mtx-dialog-content'",
    '[class.mtx-dialog-actions]': "selector=='mtx-dialog-actions'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxDialogComponentsComponent implements OnInit {

  get element(): HTMLElement { return this.hostRef.nativeElement }
  get selector(): string { return this.element.tagName.toLowerCase() }
  get titleAttribute() { return this.element.getAttributeNames().includes('mtx-dialog-title') }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
