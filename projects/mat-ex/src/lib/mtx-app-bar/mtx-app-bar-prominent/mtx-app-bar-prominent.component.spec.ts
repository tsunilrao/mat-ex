import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxAppBarProminentComponent } from './mtx-app-bar-prominent.component';

describe('MtxAppBarProminentComponent', () => {
  let component: MtxAppBarProminentComponent;
  let fixture: ComponentFixture<MtxAppBarProminentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxAppBarProminentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxAppBarProminentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
