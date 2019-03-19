import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroImpresoComponent } from './electro-impreso.component';

describe('ElectroImpresoComponent', () => {
  let component: ElectroImpresoComponent;
  let fixture: ComponentFixture<ElectroImpresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroImpresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroImpresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
