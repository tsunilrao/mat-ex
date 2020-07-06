import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxExpansionComponent } from './mtx-expansion.component';

describe('MtxExpansionComponent', () => {
  let component: MtxExpansionComponent;
  let fixture: ComponentFixture<MtxExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
