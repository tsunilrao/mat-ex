import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentsSectionComponent } from './home-components-section.component';

describe('HomeComponentsSectionComponent', () => {
  let component: HomeComponentsSectionComponent;
  let fixture: ComponentFixture<HomeComponentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
