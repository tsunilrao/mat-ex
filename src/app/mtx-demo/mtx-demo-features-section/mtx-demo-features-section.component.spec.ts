import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDemoFeaturesSectionComponent } from './mtx-demo-features-section.component';

describe('MtxDemoFeaturesSectionComponent', () => {
  let component: MtxDemoFeaturesSectionComponent;
  let fixture: ComponentFixture<MtxDemoFeaturesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDemoFeaturesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDemoFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
