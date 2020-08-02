import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'mtx-page-content',
  templateUrl: './mtx-page-content.component.html',
  styleUrls: ['./mtx-page-content.component.scss'],
  host: {class: 'mtx-page-content mtx-page-full-width'},
  encapsulation: ViewEncapsulation.None
})
export class MtxPageContentComponent implements OnInit {

  nativeElement: any;

  constructor(hostRef: ElementRef) { 
    this.nativeElement = hostRef.nativeElement
  }

  ngOnInit(): void {
  }

}
