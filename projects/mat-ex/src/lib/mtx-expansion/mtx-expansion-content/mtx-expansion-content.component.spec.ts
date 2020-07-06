import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxExpansionContentComponent } from './mtx-expansion-content.component';

describe('MtxExpansionContentComponent', () => {
  let component: MtxExpansionContentComponent;
  let fixture: ComponentFixture<MtxExpansionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxExpansionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxExpansionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
