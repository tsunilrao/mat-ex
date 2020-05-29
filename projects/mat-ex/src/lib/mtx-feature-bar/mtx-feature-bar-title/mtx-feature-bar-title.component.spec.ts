import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxFeatureBarTitleComponent } from './mtx-feature-bar-title.component';

describe('MtxFeatureBarTitleComponent', () => {
  let component: MtxFeatureBarTitleComponent;
  let fixture: ComponentFixture<MtxFeatureBarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxFeatureBarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxFeatureBarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
