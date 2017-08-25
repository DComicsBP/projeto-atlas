import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntradaComponent } from './login-entrada.component';

describe('LoginEntradaComponent', () => {
  let component: LoginEntradaComponent;
  let fixture: ComponentFixture<LoginEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
