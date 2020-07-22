import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxBottomNavDemoInteractiveDemoComponent } from './mtx-bottom-nav-demo-interactive-demo.component';

describe('MtxBottomNavDemoInteractiveDemoComponent', () => {
  let component: MtxBottomNavDemoInteractiveDemoComponent;
  let fixture: ComponentFixture<MtxBottomNavDemoInteractiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxBottomNavDemoInteractiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxBottomNavDemoInteractiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
