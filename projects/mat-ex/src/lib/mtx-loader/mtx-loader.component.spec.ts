import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxLoaderComponent } from './mtx-loader.component';

describe('MtxLoaderComponent', () => {
  let component: MtxLoaderComponent;
  let fixture: ComponentFixture<MtxLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
