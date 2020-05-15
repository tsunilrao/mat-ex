import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mtx-dialog-icon',
  host: {class:'mtx-dialog-icon'},
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog-icon.component.html',
  styleUrls: ['./dialog-icon.component.scss']
})
export class DialogIconComponent implements OnInit {

  @Input() color;

  constructor() { }

  ngOnInit(): void {
  }

}
