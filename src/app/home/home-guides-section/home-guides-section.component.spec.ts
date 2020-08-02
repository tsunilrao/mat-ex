import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuidesSectionComponent } from './home-guides-section.component';

describe('HomeGuidesSectionComponent', () => {
  let component: HomeGuidesSectionComponent;
  let fixture: ComponentFixture<HomeGuidesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGuidesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGuidesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
