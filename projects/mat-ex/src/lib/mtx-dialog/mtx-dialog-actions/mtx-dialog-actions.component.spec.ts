import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogActionsComponent } from './mtx-dialog-actions.component';

describe('MtxDialogActionsComponent', () => {
  let component: MtxDialogActionsComponent;
  let fixture: ComponentFixture<MtxDialogActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
