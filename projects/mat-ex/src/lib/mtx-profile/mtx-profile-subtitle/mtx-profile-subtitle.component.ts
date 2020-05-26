import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-profile-subtitle',
  host: { class: 'mtx-profile-subtitle' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile-subtitle.component.html',
  styleUrls: ['./mtx-profile-subtitle.component.scss']
})
export class MtxProfileSubtitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
