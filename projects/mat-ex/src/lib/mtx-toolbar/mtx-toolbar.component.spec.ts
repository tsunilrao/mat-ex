import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxToolbarComponent } from './mtx-toolbar.component';

describe('MtxToolbarComponent', () => {
  let component: MtxToolbarComponent;
  let fixture: ComponentFixture<MtxToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
