import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafoBloccoComponent } from './grafo-blocco.component';

describe('GrafoBloccoComponent', () => {
  let component: GrafoBloccoComponent;
  let fixture: ComponentFixture<GrafoBloccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafoBloccoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafoBloccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
