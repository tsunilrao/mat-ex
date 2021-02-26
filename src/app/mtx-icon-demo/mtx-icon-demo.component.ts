import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtx-icon-demo',
  templateUrl: './mtx-icon-demo.component.html',
  styleUrls: ['./mtx-icon-demo.component.scss']
})
export class MtxIconDemoComponent implements OnInit {

  public attributes = [
    { title: 'Dense', attribute: 'mtx-dense-icon', description: 'A condensed icon with reduced size.' },
    { title: 'Standard', attribute: 'mtx-icon', description: 'Standard icon for most use cases.' },
    { title: 'Prime', attribute: 'mtx-prime-icon', description: 'A lavish icon with lush size.' },
    { title: 'Prominent', attribute: 'mtx-prominent-icon', description: 'A show stopper icon.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
