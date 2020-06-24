import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxAppBarButtonComponent } from './mtx-app-bar-button.component';

describe('MtxAppBarButtonComponent', () => {
  let component: MtxAppBarButtonComponent;
  let fixture: ComponentFixture<MtxAppBarButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxAppBarButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxAppBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
