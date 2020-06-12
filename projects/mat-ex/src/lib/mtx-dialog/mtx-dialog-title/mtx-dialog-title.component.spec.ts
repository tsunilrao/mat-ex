import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDialogTitleComponent } from './mtx-dialog-title.component';

describe('MtxDialogTitleComponent', () => {
  let component: MtxDialogTitleComponent;
  let fixture: ComponentFixture<MtxDialogTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDialogTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDialogTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
