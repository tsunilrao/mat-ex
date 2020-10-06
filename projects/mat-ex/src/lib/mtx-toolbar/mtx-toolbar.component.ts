import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-toolbar, mtx-mini-toolbar, mtx-standard-toolbar, mtx-large-toolbar, mtx-huge-toolbar,

            mtx-overline-bar, mtx-overline-toolbar, 
            mtx-caption-bar, mtx-caption-toolbar, 
            mtx-label-bar, mtx-label-toolbar, 
            mtx-header-bar, mtx-header-toolbar, 
            mtx-title-bar, mtx-title-toolbar,
            mtx-mini-overline-bar, mtx-mini-title-bar, mtx-caption-toolbar, mtx-label-toolbar, mtx-standard-toolbar, mtx-large-toolbar, mtx-prime-toobar, mtx-overline-toolbar`,
  templateUrl: './mtx-toolbar.component.html',
  styleUrls: ['./mtx-toolbar.component.scss'],
  host: {
    class: 'mtx-toolbar',
    '[class.mtx-mini-toolbar]': "selector=='mtx-mini-toolbar'",
    '[class.mtx-standard-toolbar]': "selector=='mtx-standard-toolbar' || selector=='mtx-toolbar'",
    '[class.mtx-large-toolbar]': "selector=='mtx-large-toolbar'",
    '[class.mtx-huge-toolbar]': "selector=='mtx-huge-toolbar'",
    '[class.mtx-overline-bar]': "selector=='mtx-overline-bar'",
    '[class.mtx-overline-toolbar]': "selector=='mtx-overline-toolbar'",
    '[class.mtx-caption-bar]': "selector=='mtx-caption-bar'",
    '[class.mtx-caption-toolbar]': "selector=='mtx-caption-toolbar'",
    '[class.mtx-label-bar]': "selector=='mtx-label-bar'",
    '[class.mtx-label-toolbar]': "selector=='mtx-label-toolbar'",
    '[class.mtx-header-bar]': "selector=='mtx-header-bar'",
    '[class.mtx-header-toolbar]': "selector=='mtx-header-toolbar'",
    '[class.mtx-title-bar]': "selector=='mtx-title-bar'",
    '[class.mtx-title-toolbar]': "selector=='mtx-title-toolbar'",
    '[class.mtx-mini-overline-bar]': "selector=='mtx-mini-overline-bar'",
    '[class.mtx-mini-title-bar]': "selector=='mtx-mini-title-bar'",
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxToolbarComponent implements OnInit {

  @Input() title?: string;
  @Input() icon?: string;
  @Input() imageUrl?: string;
  @Input() meta?: string;
  @Input() menu?: string;

  get visual() { return this.icon; }
  get action() { return this.meta; }

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
