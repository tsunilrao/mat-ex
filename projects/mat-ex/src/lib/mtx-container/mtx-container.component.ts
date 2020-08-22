import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-container, mtx-row, mtx-column`,
  templateUrl: './mtx-container.component.html',
  styleUrls: ['./mtx-container.component.scss'],
  host: { 
    class: 'mtx-container', 
    '[class.mtx-row]': "selector=='mtx-row'",
    '[class.mtx-column]': "selector=='mtx-column'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxContainerComponent implements OnInit {

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }
  
  ngOnInit(): void {
  }
  
}
