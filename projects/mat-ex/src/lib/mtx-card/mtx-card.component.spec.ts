import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxCardComponent } from './mtx-card.component';

describe('MtxCardComponent', () => {
  let component: MtxCardComponent;
  let fixture: ComponentFixture<MtxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
