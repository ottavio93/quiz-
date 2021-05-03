import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiUtenteQuizComponent } from './aggiungi-utente-quiz.component';

describe('AggiungiUtenteQuizComponent', () => {
  let component: AggiungiUtenteQuizComponent;
  let fixture: ComponentFixture<AggiungiUtenteQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiUtenteQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiUtenteQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
