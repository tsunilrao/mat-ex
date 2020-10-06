import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxSidesheetComponent } from './mtx-sidesheet.component';

describe('MtxSidesheetComponent', () => {
  let component: MtxSidesheetComponent;
  let fixture: ComponentFixture<MtxSidesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxSidesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxSidesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
