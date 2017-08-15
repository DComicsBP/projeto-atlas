import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SambientalComponent } from './sambiental.component';

describe('SambientalComponent', () => {
  let component: SambientalComponent;
  let fixture: ComponentFixture<SambientalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SambientalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SambientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
