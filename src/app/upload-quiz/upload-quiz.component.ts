import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../_services/quiz.service';
import { LocalStorageService } from 'ngx-webstorage';
import { QuizModel } from '../dto/QuizModel';
import { throwError } from 'rxjs';
import { Location } from '@angular/common';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-upload-quiz',
  templateUrl: './upload-quiz.component.html',
  styleUrls: ['./upload-quiz.component.css'],
})
export class UploadQuizComponent implements OnInit {
  difficolta = ['junior', 'senior', 'intermedio'];
  quizForm!: FormGroup;
  quizIdRandom = this.randomId();
  isLoggedIn = false;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    public fb: FormBuilder,
    private quizService: QuizService,
    private _location: Location
  ) {}
  model: any;
  username = sessionStorage.getItem('username');
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    this.model = new QuizModel(this.quizIdRandom, '', '', '', this.username);
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.quizService.putQuiz(this.model).subscribe((error) => {
      this.ngOnInit();
      throwError(error);
      console.log(this.model);
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
    return JSON.stringify(this.model);
  }

  backClicked() {
    this._location.back();
  }
}
