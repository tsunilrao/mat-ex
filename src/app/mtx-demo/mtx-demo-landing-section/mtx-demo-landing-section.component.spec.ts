import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDemoLandingSectionComponent } from './mtx-demo-landing-section.component';

describe('MtxDemoLandingSectionComponent', () => {
  let component: MtxDemoLandingSectionComponent;
  let fixture: ComponentFixture<MtxDemoLandingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDemoLandingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDemoLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
