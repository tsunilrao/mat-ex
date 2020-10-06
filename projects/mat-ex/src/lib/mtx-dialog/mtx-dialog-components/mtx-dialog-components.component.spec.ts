import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogComponentsComponent } from './mtx-dialog-components.component';

describe('MtxDialogComponentsComponent', () => {
  let component: MtxDialogComponentsComponent;
  let fixture: ComponentFixture<MtxDialogComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
