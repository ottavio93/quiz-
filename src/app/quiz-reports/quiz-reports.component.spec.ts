import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuizReportsComponent } from './quiz-reports.component';

describe('QuizReportsComponent', () => {
  let component: QuizReportsComponent;
  let fixture: ComponentFixture<QuizReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
