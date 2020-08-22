import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageAreaComponent } from './mtx-page-area.component';

describe('MtxPageAreaComponent', () => {
  let component: MtxPageAreaComponent;
  let fixture: ComponentFixture<MtxPageAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
