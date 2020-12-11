import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxTextDemoComponent } from './mtx-text-demo.component';

describe('MtxTextDemoComponent', () => {
  let component: MtxTextDemoComponent;
  let fixture: ComponentFixture<MtxTextDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxTextDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxTextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
