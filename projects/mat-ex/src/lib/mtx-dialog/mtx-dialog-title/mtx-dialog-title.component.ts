import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'mtx-dialog-title',
  templateUrl: './mtx-dialog-title.component.html',
  styleUrls: ['./mtx-dialog-title.component.scss'],
  host: { class: 'mtx-dialog-title mat-h2' },
  encapsulation: ViewEncapsulation.None,

})
export class MtxDialogTitleComponent implements OnInit, AfterViewInit {

  variant: string;
  color: string;

  constructor(private hostRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.color != 'basic' && (this.variant == 'basic' || this.variant == 'stroked')) {
      this.hostRef.nativeElement.classList.add('mat-icon');
      this.hostRef.nativeElement.classList.add('mat-' + this.color);
    }

    if (this.variant == 'flat' || this.variant == 'raised') {
      this.hostRef.nativeElement.classList.add('mat-toolbar');
      this.hostRef.nativeElement.classList.add('mat-' + this.color);
    }
  }

}
