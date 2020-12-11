import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUtilitiesSectionComponent } from './home-utilities-section.component';

describe('HomeUtilitiesSectionComponent', () => {
  let component: HomeUtilitiesSectionComponent;
  let fixture: ComponentFixture<HomeUtilitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUtilitiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUtilitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
