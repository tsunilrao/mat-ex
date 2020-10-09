import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxTextComponent } from './mtx-text.component';

describe('MtxTextComponent', () => {
  let component: MtxTextComponent;
  let fixture: ComponentFixture<MtxTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
