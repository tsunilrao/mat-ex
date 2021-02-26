import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScrollviewCardComponent } from './home-scrollview-card.component';

describe('HomeScrollviewCardComponent', () => {
  let component: HomeScrollviewCardComponent;
  let fixture: ComponentFixture<HomeScrollviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScrollviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScrollviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
