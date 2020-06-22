import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxAppBarTitleComponent } from './mtx-app-bar-title.component';

describe('MtxAppBarTitleComponent', () => {
  let component: MtxAppBarTitleComponent;
  let fixture: ComponentFixture<MtxAppBarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxAppBarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxAppBarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
