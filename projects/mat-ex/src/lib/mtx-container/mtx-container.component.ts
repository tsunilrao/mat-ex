import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: `mtx-container, mtx-row, mtx-column`,
  templateUrl: './mtx-container.component.html',
  styleUrls: ['./mtx-container.component.scss'],
  host: { 
    class: 'mtx-container', 
    '[class.mtx-row]': "hostRef.nativeElement.tagName=='MTX-ROW'",
    '[class.mtx-column]': "hostRef.nativeElement.tagName=='MTX-COLUMN'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxContainerComponent implements OnInit {

  constructor(public hostRef: ElementRef) { 
  }
  
  ngOnInit(): void {
  }
  
}
