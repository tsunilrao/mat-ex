import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, Input, ViewChild } from '@angular/core';


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
  @ViewChild('text') textContainer: ElementRef;

  showSpacer:boolean = false;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
    if (!this.size) this.size = PROFILE_SIZE_ATTRIBUTES[0];
  }

  ngAfterViewInit(): void {
    PROFILE_SIZE_ATTRIBUTES.forEach(attr => {
      if (attr === this.size) this.hostRef.nativeElement.classList.add('mtx-profile-' + attr);
    })
    const hasText = (this.textContainer.nativeElement.innerHTML != '')
    const hasPhoto = (this.hostRef.nativeElement.children.length > 1)
    setTimeout(() => { this.showSpacer = hasText && hasPhoto }, 0);
  }

}
