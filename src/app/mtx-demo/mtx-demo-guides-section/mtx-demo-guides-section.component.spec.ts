import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDemoGuidesSectionComponent } from './mtx-demo-guides-section.component';

describe('MtxDemoGuidesSectionComponent', () => {
  let component: MtxDemoGuidesSectionComponent;
  let fixture: ComponentFixture<MtxDemoGuidesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDemoGuidesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDemoGuidesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
