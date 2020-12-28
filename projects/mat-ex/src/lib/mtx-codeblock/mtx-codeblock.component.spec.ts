import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxCodeblockComponent } from './mtx-codeblock.component';

describe('MtxCodeblockComponent', () => {
  let component: MtxCodeblockComponent;
  let fixture: ComponentFixture<MtxCodeblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxCodeblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxCodeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
