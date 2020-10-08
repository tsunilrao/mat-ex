import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtx-dialog-demo',
  templateUrl: './mtx-dialog-demo.component.html',
  styleUrls: ['./mtx-dialog-demo.component.scss']
})
export class MtxDialogDemoComponent implements OnInit {

  dialog = 'basic';

  constructor() { }

  ngOnInit(): void {
  }

}
