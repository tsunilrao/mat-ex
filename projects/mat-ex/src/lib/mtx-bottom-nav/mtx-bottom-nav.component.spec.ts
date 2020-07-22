import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxBottomNavComponent } from './mtx-bottom-nav.component';

describe('MtxBottomNavComponent', () => {
  let component: MtxBottomNavComponent;
  let fixture: ComponentFixture<MtxBottomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxBottomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
