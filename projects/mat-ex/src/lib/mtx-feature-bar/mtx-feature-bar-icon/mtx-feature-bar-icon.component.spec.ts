import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxFeatureBarIconComponent } from './mtx-feature-bar-icon.component';

describe('MtxFeatureBarIconComponent', () => {
  let component: MtxFeatureBarIconComponent;
  let fixture: ComponentFixture<MtxFeatureBarIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxFeatureBarIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxFeatureBarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
