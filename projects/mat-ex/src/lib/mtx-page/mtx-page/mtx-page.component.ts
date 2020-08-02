import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'mtx-page',
  templateUrl: './mtx-page.component.html',
  styleUrls: ['./mtx-page.component.scss'],
  host: { class: 'mtx-page' },
  encapsulation: ViewEncapsulation.None
})
export class MtxPageComponent implements OnInit, OnChanges {

  @Input() title?: string;
  @Input() description?: string;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.title) this.titleService.setTitle(this.title)
    if (changes.description) this.metaService.updateTag({name:'description', content:this.description})
  }

  ngOnInit(): void {
  }

}
