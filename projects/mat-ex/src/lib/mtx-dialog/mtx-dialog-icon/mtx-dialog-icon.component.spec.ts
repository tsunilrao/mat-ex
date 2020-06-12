import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogIconComponent } from './mtx-dialog-icon.component';

describe('MtxDialogIconComponent', () => {
  let component: MtxDialogIconComponent;
  let fixture: ComponentFixture<MtxDialogIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
