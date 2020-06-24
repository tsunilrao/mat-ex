import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageHeaderComponent } from './mtx-page-header.component';

describe('MtxPageHeaderComponent', () => {
  let component: MtxPageHeaderComponent;
  let fixture: ComponentFixture<MtxPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
