import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCursoComponent } from './tarjeta-curso.component';

describe('TarjetaCursoComponent', () => {
  let component: TarjetaCursoComponent;
  let fixture: ComponentFixture<TarjetaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
