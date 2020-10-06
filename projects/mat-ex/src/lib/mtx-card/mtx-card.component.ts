import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-card, mtx-basic-card, mtx-raised-card, mtx-stroked-card, mtx-flat-card`,
  templateUrl: './mtx-card.component.html',
  styleUrls: ['./mtx-card.component.scss'],
  host: {
    class: 'mtx-card',
    '[class.mtx-raised-card]': "['mtx-card', 'mtx-raised-card'].includes(selector)",
    '[class.mtx-stroked-card]': "selector=='mtx-stroked-card'",
    '[class.mtx-flat-card]': "selector=='mtx-flat-card'",
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxCardComponent implements OnInit {

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
