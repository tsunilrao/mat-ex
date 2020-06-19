import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxAppBarComponent } from './mtx-app-bar.component';

describe('MtxAppBarComponent', () => {
  let component: MtxAppBarComponent;
  let fixture: ComponentFixture<MtxAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
