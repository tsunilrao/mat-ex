import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDemoComponentsSectionComponent } from './mtx-demo-components-section.component';

describe('MtxDemoComponentsSectionComponent', () => {
  let component: MtxDemoComponentsSectionComponent;
  let fixture: ComponentFixture<MtxDemoComponentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDemoComponentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDemoComponentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
