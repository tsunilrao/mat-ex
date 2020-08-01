import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageDemoComponent } from './mtx-page-demo.component';

describe('MtxPageDemoComponent', () => {
  let component: MtxPageDemoComponent;
  let fixture: ComponentFixture<MtxPageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
