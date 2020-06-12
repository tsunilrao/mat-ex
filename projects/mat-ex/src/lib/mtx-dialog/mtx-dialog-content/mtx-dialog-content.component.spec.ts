import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogContentComponent } from './mtx-dialog-content.component';

describe('MtxDialogContentComponent', () => {
  let component: MtxDialogContentComponent;
  let fixture: ComponentFixture<MtxDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
