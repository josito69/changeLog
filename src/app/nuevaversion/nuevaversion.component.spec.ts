import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaversionComponent } from './nuevaversion.component';

describe('NuevaversionComponent', () => {
  let component: NuevaversionComponent;
  let fixture: ComponentFixture<NuevaversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
