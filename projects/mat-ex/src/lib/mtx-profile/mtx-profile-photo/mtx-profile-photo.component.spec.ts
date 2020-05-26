import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxProfilePhotoComponent } from './mtx-profile-photo.component';

describe('MtxProfilePhotoComponent', () => {
  let component: MtxProfilePhotoComponent;
  let fixture: ComponentFixture<MtxProfilePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxProfilePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
