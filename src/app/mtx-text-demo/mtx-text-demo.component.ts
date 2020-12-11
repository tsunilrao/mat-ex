import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtx-text-demo',
  templateUrl: './mtx-text-demo.component.html',
  styleUrls: ['./mtx-text-demo.component.scss']
})
export class MtxTextDemoComponent implements OnInit {

  public attributes = [
    {attribute:'mtx-display', description:'Large, one-off header or a hero header).'}, 
    {attribute:'mtx-headline', description:'Useful as section headings.'}, 
    {attribute:'mtx-title', description:'Can be used in toolbars, cards etc.'}, 
    {attribute:'mtx-subtitle', description:'Can be used instead of Titles for lower emphasis.'}, 
    {attribute:'mtx-label', description:'Bold text generally used in buttons.'}, 
    {attribute:'mtx-paragraph', description:'Regular paragraph text.'}, 
    {attribute:'mtx-caption', description:'Smaller body and hint text.'}, 
    {attribute:'mtx-overline', description:'Smallest text generally used as overlines.'}, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
