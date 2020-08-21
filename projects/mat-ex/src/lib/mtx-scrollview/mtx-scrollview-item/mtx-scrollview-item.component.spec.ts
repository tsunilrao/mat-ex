import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxScrollviewItemComponent } from './mtx-scrollview-item.component';

describe('MtxScrollviewItemComponent', () => {
  let component: MtxScrollviewItemComponent;
  let fixture: ComponentFixture<MtxScrollviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxScrollviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxScrollviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
