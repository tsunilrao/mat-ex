import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `mtx-page-area, mtx-page-header, mtx-page-footer, mtx-page-content`,
  templateUrl: './mtx-page-area.component.html',
  styleUrls: ['./mtx-page-area.component.scss'],
  host: {
    class: 'mtx-page-area',
    '[class.mtx-page-header]': "selector=='mtx-page-header'",
    '[class.mtx-page-footer]': "selector=='mtx-page-footer'",
    '[class.mtx-page-content]': "selector=='mtx-page-content'",
    '[class.mtx-page-padding]': "['mtx-page-header', 'mtx-page-header', 'mtx-page-content'].includes(selector)",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxPageAreaComponent implements OnInit {

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }
  get childCount(): number { return this.hostRef.nativeElement.childNodes.length }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
