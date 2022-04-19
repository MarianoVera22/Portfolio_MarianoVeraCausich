import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeTextoComponent } from './acerca-de-texto.component';

describe('AcercaDeTextoComponent', () => {
  let component: AcercaDeTextoComponent;
  let fixture: ComponentFixture<AcercaDeTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
