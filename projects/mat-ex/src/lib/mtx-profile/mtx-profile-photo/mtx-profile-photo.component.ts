import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-profile-photo',
  host: { class: 'mtx-profile-photo' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile-photo.component.html',
  styleUrls: ['./mtx-profile-photo.component.scss']
})
export class MtxProfilePhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
