import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartecipaQuizComponent } from './partecipa-quiz.component';

describe('PartecipaQuizComponent', () => {
  let component: PartecipaQuizComponent;
  let fixture: ComponentFixture<PartecipaQuizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartecipaQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartecipaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
