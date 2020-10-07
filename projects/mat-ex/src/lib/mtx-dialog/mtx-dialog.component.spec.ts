import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogComponent } from './mtx-dialog.component';

describe('MtxDialogComponent', () => {
  let component: MtxDialogComponent;
  let fixture: ComponentFixture<MtxDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
