import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxAppBarDemoComponent } from './mtx-app-bar-demo.component';

describe('MtxAppBarDemoComponent', () => {
  let component: MtxAppBarDemoComponent;
  let fixture: ComponentFixture<MtxAppBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxAppBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxAppBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
