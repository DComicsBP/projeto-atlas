import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenciaComponent } from './violencia.component';

describe('ViolenciaComponent', () => {
  let component: ViolenciaComponent;
  let fixture: ComponentFixture<ViolenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
