import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageComponent } from './mtx-page.component';

describe('MtxPageComponent', () => {
  let component: MtxPageComponent;
  let fixture: ComponentFixture<MtxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
