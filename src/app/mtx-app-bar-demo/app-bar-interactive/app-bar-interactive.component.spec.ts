import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarInteractiveComponent } from './app-bar-interactive.component';

describe('AppBarInteractiveComponent', () => {
  let component: AppBarInteractiveComponent;
  let fixture: ComponentFixture<AppBarInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarInteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
