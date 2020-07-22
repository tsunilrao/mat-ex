import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mtx-bottom-nav',
  templateUrl: './mtx-bottom-nav.component.html',
  styleUrls: ['./mtx-bottom-nav.component.scss'],
  host: {class:'mtx-bottom-nav'},
  encapsulation: ViewEncapsulation.None
})
export class MtxBottomNavComponent implements OnInit {

  @Input() color:string;

  constructor() { }

  ngOnInit(): void {
  }

}
