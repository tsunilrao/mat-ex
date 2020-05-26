import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxProfileTitleComponent } from './mtx-profile-title.component';

describe('MtxProfileTitleComponent', () => {
  let component: MtxProfileTitleComponent;
  let fixture: ComponentFixture<MtxProfileTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxProfileTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxProfileTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
