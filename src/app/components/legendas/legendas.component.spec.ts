import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendasComponent } from './legendas.component';

describe('LegendasComponent', () => {
  let component: LegendasComponent;
  let fixture: ComponentFixture<LegendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
