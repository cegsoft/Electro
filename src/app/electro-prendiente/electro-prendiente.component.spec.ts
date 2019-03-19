import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroPrendienteComponent } from './electro-prendiente.component';

describe('ElectroPrendienteComponent', () => {
  let component: ElectroPrendienteComponent;
  let fixture: ComponentFixture<ElectroPrendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroPrendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroPrendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
