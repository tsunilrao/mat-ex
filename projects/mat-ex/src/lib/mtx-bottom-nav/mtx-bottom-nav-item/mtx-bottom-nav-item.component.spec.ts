import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxBottomNavItemComponent } from './mtx-bottom-nav-item.component';

describe('MtxBottomNavItemComponent', () => {
  let component: MtxBottomNavItemComponent;
  let fixture: ComponentFixture<MtxBottomNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxBottomNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxBottomNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
