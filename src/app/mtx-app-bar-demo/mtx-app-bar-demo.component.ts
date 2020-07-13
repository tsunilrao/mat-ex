import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';

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

  @ViewChild('menu') menu: MatMenu

  constructor() { }

  ngOnInit(): void {
  }

}
