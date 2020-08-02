import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxScrollerComponent } from './mtx-scroller.component';

describe('MtxScrollerComponent', () => {
  let component: MtxScrollerComponent;
  let fixture: ComponentFixture<MtxScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
