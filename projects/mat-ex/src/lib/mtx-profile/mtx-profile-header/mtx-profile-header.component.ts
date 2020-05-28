import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-profile-header',
  host: { class: 'mtx-profile-header' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile-header.component.html',
  styleUrls: ['./mtx-profile-header.component.scss']
})
export class MtxProfileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
