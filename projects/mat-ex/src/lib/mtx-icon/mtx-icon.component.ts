import { Component, OnInit, Input, ViewEncapsulation, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, AfterViewInit, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-icon, mtx-small-icon`,
  templateUrl: './mtx-icon.component.html',
  styleUrls: ['./mtx-icon.component.scss'],
  host: {
    class: 'mtx-icon',
    '[class.mtx-small-icon]': "selector=='mtx-small-icon' || size=='small'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxIconComponent implements OnInit {

  @Input() size?: string;
  @Input() icon?: string;

  @ViewChild('more_vert', {static:true}) moreVertRef: TemplateRef<HTMLElement>

  get iconRef(): TemplateRef<HTMLElement> {
    switch (this.icon) {
      case 'more_vert': return this.moreVertRef;
      default: return null;
    }
  }

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

}
