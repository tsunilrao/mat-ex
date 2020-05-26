import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxProfileComponent } from './mtx-profile.component';

describe('MtxProfileComponent', () => {
  let component: MtxProfileComponent;
  let fixture: ComponentFixture<MtxProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
