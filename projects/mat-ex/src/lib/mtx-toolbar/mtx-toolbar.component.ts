import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-toolbar, mtx-dense-toolbar, mtx-basic-toolbar, mtx-prime-toolbar, mtx-prominent-toolbar,`,
  templateUrl: './mtx-toolbar.component.html',
  styleUrls: ['./mtx-toolbar.component.scss'],
  host: {
    class: 'mtx-toolbar',
    '[class.mtx-dense-toolbar]': "selector=='mtx-dense-toolbar'",
    '[class.mtx-basic-toolbar]': "selector=='mtx-basic-toolbar' || selector=='mtx-toolbar'",
    '[class.mtx-prime-toolbar]': "selector=='mtx-prime-toolbar'",
    '[class.mtx-prominent-toolbar]': "selector=='mtx-prominent-toolbar'",
    '[class.mtx-toolbar-row]': "column===undefined",
    '[class.mtx-toolbar-column]': "column!==undefined",
    '[class.mtx-toolbar-padding]': "nopadding===undefined",
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxToolbarComponent implements OnInit {

  @Input() toolbarTitle?: string;
  @Input() icon?: string;
  @Input() imageUrl?: string;
  @Input() meta?: string;
  @Input() menu?: string;
  @Input() column;
  @Input() nopadding;

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
