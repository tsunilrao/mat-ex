import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxProfileHeaderComponent } from './mtx-profile-header.component';

describe('MtxProfileHeaderComponent', () => {
  let component: MtxProfileHeaderComponent;
  let fixture: ComponentFixture<MtxProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
