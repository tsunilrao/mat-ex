import { Component, OnInit, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-dialog-title',
  host: { class: 'mtx-dialog-title mat-h2' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss']
})
export class DialogTitleComponent implements OnInit, AfterViewInit {

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
