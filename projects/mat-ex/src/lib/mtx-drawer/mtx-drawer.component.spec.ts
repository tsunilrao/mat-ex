import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDrawerComponent } from './mtx-drawer.component';

describe('MtxDrawerComponent', () => {
  let component: MtxDrawerComponent;
  let fixture: ComponentFixture<MtxDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
