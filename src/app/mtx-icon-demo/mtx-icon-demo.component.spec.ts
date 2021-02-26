import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxIconDemoComponent } from './mtx-icon-demo.component';

describe('MtxIconDemoComponent', () => {
  let component: MtxIconDemoComponent;
  let fixture: ComponentFixture<MtxIconDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxIconDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxIconDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
