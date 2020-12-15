import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxNavItemComponent } from './mtx-nav-item.component';

describe('MtxNavItemComponent', () => {
  let component: MtxNavItemComponent;
  let fixture: ComponentFixture<MtxNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
