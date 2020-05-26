import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxProfileSubtitleComponent } from './mtx-profile-subtitle.component';

describe('MtxProfileSubtitleComponent', () => {
  let component: MtxProfileSubtitleComponent;
  let fixture: ComponentFixture<MtxProfileSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxProfileSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxProfileSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
