import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MtxPageAreaComponent } from './mtx-page-area/mtx-page-area.component';

@Component({
  selector: 'mtx-page',
  templateUrl: './mtx-page.component.html',
  styleUrls: ['./mtx-page.component.scss'],
  host: { class: 'mtx-page mtx-page-padding' },
  encapsulation: ViewEncapsulation.None
})
export class MtxPageComponent implements OnInit, OnChanges, AfterViewInit {

  @Input('page-title') title?: string;
  @Input() description?: string;

  pageHeaderHasContent: boolean = true;
  @ViewChild('pageHeader') pageHeader: MtxPageAreaComponent

  constructor(private titleService: Title, private metaService: Meta, private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.title) this.titleService.setTitle(this.title)
    if (changes.description) this.metaService.updateTag({ name: 'description', content: this.description })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.pageHeader.childCount == 0) this.pageHeaderHasContent = false
    this.cdr.detectChanges()
  }

}
