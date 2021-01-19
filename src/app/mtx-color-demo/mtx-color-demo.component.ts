import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtx-color-demo',
  templateUrl: './mtx-color-demo.component.html',
  styleUrls: ['./mtx-color-demo.component.scss']
})
export class MtxColorDemoComponent implements OnInit {

  public attributes = [
    { title: 'Red', color: 'mtx-red', forecolor: 'mtx-red-text' },
    { title: 'Pink', color: 'mtx-pink', forecolor: 'mtx-pink-text' },
    { title: 'Purple', color: 'mtx-purple', forecolor: 'mtx-purple-text' },
    { title: 'Deep Purple', color: 'mtx-deep-purple', forecolor: 'mtx-deep-purple-text' },
    { title: 'Indigo', color: 'mtx-indigo', forecolor: 'mtx-indigo-text' },
    { title: 'Blue', color: 'mtx-blue', forecolor: 'mtx-blue-text' },
    { title: 'Light Blue', color: 'mtx-light-blue', forecolor: 'mtx-light-blue-text' },
    { title: 'Cyan', color: 'mtx-cyan', forecolor: 'mtx-cyan-text' },
    { title: 'Teal', color: 'mtx-teal', forecolor: 'mtx-teal-text' },
    { title: 'Green', color: 'mtx-green', forecolor: 'mtx-green-text' },
    { title: 'Light Green', color: 'mtx-light-green', forecolor: 'mtx-light-green-text' },
    { title: 'Lime', color: 'mtx-lime', forecolor: 'mtx-lime-text' },
    { title: 'Yellow', color: 'mtx-yellow', forecolor: 'mtx-yellow-text' },
    { title: 'Amber', color: 'mtx-amber', forecolor: 'mtx-amber-text' },
    { title: 'Orange', color: 'mtx-orange', forecolor: 'mtx-orange-text' },
    { title: 'Deep Orange', color: 'mtx-deep-orange', forecolor: 'mtx-deep-orange-text' },
    { title: 'Brown', color: 'mtx-brown', forecolor: 'mtx-brown-text' },
    { title: 'Gray', color: 'mtx-gray', forecolor: 'mtx-gray-text' },
    { title: 'Blue Gray', color: 'mtx-blue-gray', forecolor: 'mtx-blue-gray-text' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
