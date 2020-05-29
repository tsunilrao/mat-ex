import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxFeatureBarComponent } from './mtx-feature-bar.component';

describe('MtxFeatureBarComponent', () => {
  let component: MtxFeatureBarComponent;
  let fixture: ComponentFixture<MtxFeatureBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxFeatureBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxFeatureBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
