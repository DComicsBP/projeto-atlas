import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalidadeComponent } from './mortalidade.component';

describe('MortalidadeComponent', () => {
  let component: MortalidadeComponent;
  let fixture: ComponentFixture<MortalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
