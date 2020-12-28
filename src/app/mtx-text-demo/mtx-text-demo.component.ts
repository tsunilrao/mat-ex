import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtx-text-demo',
  templateUrl: './mtx-text-demo.component.html',
  styleUrls: ['./mtx-text-demo.component.scss']
})
export class MtxTextDemoComponent implements OnInit {

  public attributes = [
    { title: 'Display', attribute: 'mtx-display', description: 'Large, one-off header or a hero header).' },
    { title: 'Headline', attribute: 'mtx-headline', description: 'Useful as section headings.' },
    { title: 'Title', attribute: 'mtx-title', description: 'Can be used in toolbars, cards etc.' },
    { title: 'Subtitle', attribute: 'mtx-subtitle', description: 'Can be used instead of Titles for lower emphasis.' },
    { title: 'Label', attribute: 'mtx-label', description: 'Bold text generally used in buttons.' },
    { title: 'Paragraph', attribute: 'mtx-paragraph', description: 'Regular paragraph text.' },
    { title: 'Caption', attribute: 'mtx-caption', description: 'Smaller body and hint text.' },
    { title: 'Overline', attribute: 'mtx-overline', description: 'Smallest text generally used as overlines.' },
    { title: 'Code', attribute: 'mtx-code', description: 'Regular monospaced text generally used for code snippets.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
