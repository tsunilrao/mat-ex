import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxContainerComponent } from './mtx-container.component';

describe('MtxContainerComponent', () => {
  let component: MtxContainerComponent;
  let fixture: ComponentFixture<MtxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
