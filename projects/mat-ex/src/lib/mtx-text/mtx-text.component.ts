import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `mtx-text, mtx-display, mtx-headline, mtx-title, mtx-subtitle, mtx-label, mtx-caption,
    mtx-overline, mtx-paragraph, mtx-code`,
  templateUrl: './mtx-text.component.html',
  styleUrls: ['./mtx-text.component.scss'],
  host: { 
    class: 'mtx-text', 
    '[class.mtx-display]': "selector=='mtx-display'",
    '[class.mtx-headline]': "selector=='mtx-headline'",
    '[class.mtx-title]': "selector=='mtx-title'",
    '[class.mtx-subtitle]': "selector=='mtx-subtitle'",
    '[class.mtx-label]': "selector=='mtx-label'",
    '[class.mtx-caption]': "selector=='mtx-caption'",
    '[class.mtx-overline]': "selector=='mtx-overline'",
    '[class.mtx-paragraph]': "selector=='mtx-paragraph'",
    '[class.mtx-code]': "selector=='mtx-code'",
  },
  encapsulation: ViewEncapsulation.None,
})
export class MtxTextComponent implements OnInit {

  get selector(): string { return this.hostRef.nativeElement.tagName.toLowerCase() }

  constructor(private hostRef: ElementRef) { }
  
  ngOnInit(): void {
  }

}
