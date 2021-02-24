import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mtx-app-bar-demo',
  templateUrl: './mtx-app-bar-demo.component.html',
  styleUrls: ['./mtx-app-bar-demo.component.scss']
})
export class MtxAppBarDemoComponent implements OnInit {

  size: string = 'standard';
  nav: string = 'menu';
  title: FormControl = new FormControl('The Quick Brown Fox jumps over the fence')
  overflow: boolean = true;
  icons: boolean = true;
  buttons: boolean = false;

  public attributes = [
    { title: 'Default', attribute: 'mtx-app-bar', description: 'Standard app-bar for most use cases.' },
    { title: 'Dense', attribute: 'mtx-dense-app-bar', description: 'A condensed app-bar with reduced free spaces.' },
    { title: 'Prime', attribute: 'mtx-prime-app-bar', description: 'A lavish app-bar with lush free spaces.' },
  ]

  public navAttributes = [
    { title: 'None', attribute: 'none', description: 'No Navigation.' },
    { title: 'Menu', attribute: 'menu', description: 'Menu button to trigger an drawer menu.' },
    { title: 'Back', attribute: 'back', description: 'Back button to navigate to the last page.' },
    { title: 'Close', attribute: 'close', description: 'Close Button to close the page and navigate to previous page.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
