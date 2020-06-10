import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxModalComponent } from './mtx-modal.component';

describe('MtxModalComponent', () => {
  let component: MtxModalComponent;
  let fixture: ComponentFixture<MtxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
