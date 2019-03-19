import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarElectroComponent } from './cargar-electro.component';

describe('CargarElectroComponent', () => {
  let component: CargarElectroComponent;
  let fixture: ComponentFixture<CargarElectroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarElectroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
