import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-icon, mtx-dense-icon, mtx-prime-icon, mtx-prominent-icon`,
  templateUrl: './mtx-icon.component.html',
  styleUrls: ['./mtx-icon.component.scss'],
  host: {
    class: 'mtx-icon',
    '[class.mtx-standard-icon]': "selector=='mtx-icon'",
    '[class.mtx-dense-icon]': "selector=='mtx-dense-icon'",
    '[class.mtx-prime-icon]': "selector=='mtx-prime-icon'",
    '[class.mtx-prominent-icon]': "selector=='mtx-prominent-icon'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxIconComponent implements OnInit {

  @Input() icon?: string;
  @Input() src?: string;

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
