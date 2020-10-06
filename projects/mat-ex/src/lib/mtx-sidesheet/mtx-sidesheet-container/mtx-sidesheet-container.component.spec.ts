import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxSidesheetContainerComponent } from './mtx-sidesheet-container.component';

describe('MtxSidesheetContainerComponent', () => {
  let component: MtxSidesheetContainerComponent;
  let fixture: ComponentFixture<MtxSidesheetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxSidesheetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxSidesheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
