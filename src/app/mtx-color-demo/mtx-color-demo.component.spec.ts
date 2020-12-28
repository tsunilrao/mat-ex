import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxColorDemoComponent } from './mtx-color-demo.component';

describe('MtxColorDemoComponent', () => {
  let component: MtxColorDemoComponent;
  let fixture: ComponentFixture<MtxColorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxColorDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxColorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
