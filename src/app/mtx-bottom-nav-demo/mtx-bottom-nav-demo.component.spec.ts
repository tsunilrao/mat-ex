import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxBottomNavDemoComponent } from './mtx-bottom-nav-demo.component';

describe('MtxBottomNavDemoComponent', () => {
  let component: MtxBottomNavDemoComponent;
  let fixture: ComponentFixture<MtxBottomNavDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxBottomNavDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxBottomNavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
