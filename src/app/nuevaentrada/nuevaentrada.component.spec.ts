import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaentradaComponent } from './nuevaentrada.component';

describe('NuevaentradaComponent', () => {
  let component: NuevaentradaComponent;
  let fixture: ComponentFixture<NuevaentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
