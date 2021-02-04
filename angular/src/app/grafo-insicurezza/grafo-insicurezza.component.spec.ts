import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafoInsicurezzaComponent } from './grafo-insicurezza.component';

describe('GrafoInsicurezzaComponent', () => {
  let component: GrafoInsicurezzaComponent;
  let fixture: ComponentFixture<GrafoInsicurezzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafoInsicurezzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafoInsicurezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
