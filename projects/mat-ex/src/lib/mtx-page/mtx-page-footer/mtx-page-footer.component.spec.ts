import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageFooterComponent } from './mtx-page-footer.component';

describe('MtxPageFooterComponent', () => {
  let component: MtxPageFooterComponent;
  let fixture: ComponentFixture<MtxPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
