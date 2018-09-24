import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelsStoneComponent } from './jewels-stone.component';

describe('JewelsStoneComponent', () => {
  let component: JewelsStoneComponent;
  let fixture: ComponentFixture<JewelsStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelsStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelsStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
