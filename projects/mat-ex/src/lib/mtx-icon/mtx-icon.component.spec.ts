import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxIconComponent } from './mtx-icon.component';

describe('MtxIconComponent', () => {
  let component: MtxIconComponent;
  let fixture: ComponentFixture<MtxIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
