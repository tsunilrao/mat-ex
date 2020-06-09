import { Component, OnInit, ViewEncapsulation, Input, ElementRef, AfterViewInit } from '@angular/core';

const PROFILE_PHOTO_SIZE_ATTRIBUTES = [
  'small',
  'medium',
  'large',
  'x-large',
];


@Component({
  selector: 'mtx-profile-photo',
  host: { class: 'mtx-profile-photo' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile-photo.component.html',
  styleUrls: ['./mtx-profile-photo.component.scss']
})
export class MtxProfilePhotoComponent implements OnInit, AfterViewInit {

  @Input() size?: string;
  @Input() src?: string;
  @Input() icon?: string = 'account_circle'
  @Input() text?: string;

  isLoaded:boolean = false;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
    if (!this.size) this.size = PROFILE_PHOTO_SIZE_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    PROFILE_PHOTO_SIZE_ATTRIBUTES.forEach(attr => {
      if (attr === this.size) this.hostRef.nativeElement.classList.add('mtx-profile-photo-' + attr);
    })
  }

  onImageLoad() {
    this.isLoaded = true
  }

}
