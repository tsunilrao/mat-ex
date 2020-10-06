import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogDemoComponent } from './mtx-dialog-demo.component';

describe('MtxDialogDemoComponent', () => {
  let component: MtxDialogDemoComponent;
  let fixture: ComponentFixture<MtxDialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
