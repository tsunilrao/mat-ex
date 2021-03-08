import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxFormComponent } from './mtx-form.component';

describe('MtxFormComponent', () => {
  let component: MtxFormComponent;
  let fixture: ComponentFixture<MtxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
