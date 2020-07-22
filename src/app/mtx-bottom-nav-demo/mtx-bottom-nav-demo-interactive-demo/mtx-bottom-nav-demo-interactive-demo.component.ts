import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mtx-bottom-nav-demo-interactive-demo',
  templateUrl: './mtx-bottom-nav-demo-interactive-demo.component.html',
  styleUrls: ['./mtx-bottom-nav-demo-interactive-demo.component.scss'],
  host: { class: 'col' },
})
export class MtxBottomNavDemoInteractiveDemoComponent implements OnInit {

  color: string = 'primary'
  items = [
    { visible: true, icon: new FormControl('home'), label: new FormControl('Home') },
    { visible: true, icon: new FormControl('dashboard'), label: new FormControl('Dashboard') },
    { visible: true, icon: new FormControl('notifications'), label: new FormControl('Alerts') },
    { visible: true, icon: new FormControl('feedback'), label: new FormControl('Feedback') },
    { visible: false, icon: new FormControl('person'), label: new FormControl('Account') },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
