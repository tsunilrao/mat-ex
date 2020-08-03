import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxScrollviewComponent } from './mtx-scrollview.component';

describe('MtxScrollviewComponent', () => {
  let component: MtxScrollviewComponent;
  let fixture: ComponentFixture<MtxScrollviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxScrollviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxScrollviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
