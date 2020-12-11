import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxToolbarDemoComponent } from './mtx-toolbar-demo.component';

describe('MtxToolbarDemoComponent', () => {
  let component: MtxToolbarDemoComponent;
  let fixture: ComponentFixture<MtxToolbarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxToolbarDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxToolbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
