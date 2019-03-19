import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenarElectroComponent } from './llenar-electro.component';

describe('LlenarElectroComponent', () => {
  let component: LlenarElectroComponent;
  let fixture: ComponentFixture<LlenarElectroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlenarElectroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenarElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
