import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, Input } from '@angular/core';

const PROFILE_SIZE_ATTRIBUTES = [
  'medium',
  'small',
  'large',
];

@Component({
  selector: 'mtx-profile',
  host: { class: 'mtx-profile' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-profile.component.html',
  styleUrls: ['./mtx-profile.component.scss']
})
export class MtxProfileComponent implements OnInit, AfterViewInit {

  @Input() size?: string;

  constructor(private hostRef: ElementRef) { }
  ngOnInit(): void {
    if (!this.size) this.size = PROFILE_SIZE_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    PROFILE_SIZE_ATTRIBUTES.forEach(attr => {
      if (attr === this.size) { 
        this.hostRef.nativeElement.classList.add('mtx-profile-' + attr); 
        const photos= this.hostRef.nativeElement.childNodes;
        photos.forEach(ref => {
          if (ref.classList.contains('mtx-profile-photo')) ref.classList.add('mtx-profile-photo-' + attr)
        })
      }
    })
    
  }
  
}
