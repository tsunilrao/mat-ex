import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxNavComponent } from './mtx-nav.component';

describe('MtxNavComponent', () => {
  let component: MtxNavComponent;
  let fixture: ComponentFixture<MtxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
