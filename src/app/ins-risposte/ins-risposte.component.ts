import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { AnswerRequest } from '../dto/AnswerModel';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-ins-risposte',
  templateUrl: './ins-risposte.component.html',
  styleUrls: ['./ins-risposte.component.css'],
})
export class InsRisposteComponent implements OnInit {
  corrette = [true, false];

  @Input() parentData!: string;
  answerForm!: FormGroup;
  quizIdRandom = this.randomId();
  allAnswers!: any[];
  answerModel = new AnswerRequest(
    this.quizIdRandom,
    '',
    false,
    this.parentData
  );
  constructor(private quizService: QuizService, public fb: FormBuilder) {}

  ngOnInit(): void {}
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.answerModel.questionId = this.parentData;
    this.quizService.putAnswer(this.answerModel).subscribe((error) => {
      this.ngOnInit();
      throwError(error);
      console.log(this.answerModel);
      location.reload();
    });
  }
  onSubmitVoid() {
    this.submitted = true;
    this.answerModel.questionId = this.parentData;
    this.answerModel.answer = 'da inserire';
    this.answerModel.corretta = false;
    this.quizService.putAnswer(this.answerModel).subscribe((error) => {
      this.ngOnInit();
      throwError(error);
      console.log(this.answerModel);
      location.reload();
    });
  }
  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 8);
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.answerModel);
  }
}
