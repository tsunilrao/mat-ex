import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDemoComponent } from './mtx-demo.component';

describe('MtxDemoComponent', () => {
  let component: MtxDemoComponent;
  let fixture: ComponentFixture<MtxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
