import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposeMatrixComponent } from './transpose-matrix.component';

describe('TransposeMatrixComponent', () => {
  let component: TransposeMatrixComponent;
  let fixture: ComponentFixture<TransposeMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransposeMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransposeMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
