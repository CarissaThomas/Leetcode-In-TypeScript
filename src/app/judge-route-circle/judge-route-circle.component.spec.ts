import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeRouteCircleComponent } from './judge-route-circle.component';

describe('JudgeRouteCircleComponent', () => {
  let component: JudgeRouteCircleComponent;
  let fixture: ComponentFixture<JudgeRouteCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeRouteCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeRouteCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
