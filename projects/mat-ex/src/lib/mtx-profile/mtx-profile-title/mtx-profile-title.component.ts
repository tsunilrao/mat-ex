import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-profile-title',
  host: { class: 'mtx-profile-title' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile-title.component.html',
  styleUrls: ['./mtx-profile-title.component.scss']
})
export class MtxProfileTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
