import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxPageContentComponent } from './mtx-page-content.component';

describe('MtxPageContentComponent', () => {
  let component: MtxPageContentComponent;
  let fixture: ComponentFixture<MtxPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
