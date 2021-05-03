import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { QuestionRequest } from '../dto/Question';
import { QuestionDelete } from '../dto/QuestionDelete';
import { TipoQuizUpdate } from '../dto/TipoQuizUpdate';
import { AuthService } from '../_services/auth.service';
import { QuizService } from '../_services/quiz.service';
import { Location } from '@angular/common';
import { TokenStorageService } from '../_services/token-storage.service';
import { TipoQuizDelete } from '../dto/TipoQuizDelete';
@Component({
  selector: 'app-inserisci-domande',
  templateUrl: './inserisci-domande.component.html',
  styleUrls: ['./inserisci-domande.component.css'],
})
export class InserisciDomandeComponent implements OnInit {
  tipo: any;
  mostra2 = false;
  constructor(
    private _location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {}
  allQuestion!: any[];
  username!: string;
  questionId = this.randomId();
  tipoquizIdParams!: any;
  questionForm!: FormGroup;
  mostra = false;
  questionDelete!: QuestionDelete;

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.username == user.username;
    console.log('ciaooooooooooo' + this.username);

    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.tipoquizIdParams = params.tipoQuizId;
      console.log(this.tipoquizIdParams);
      // same as :username in route
      this.quizService.getTipoQuiz(this.tipoquizIdParams).subscribe((data) => {
        this.tipo = data;
        console.log(this.tipo);
      });

      this.quizService
        .getAllQuestion(this.tipoquizIdParams)
        .subscribe((data) => {
          this.allQuestion = data;
          console.log(this.allQuestion);
        });
    });
    console.log(this.tipoquizIdParams);
    console.log(this.questionModel);
  }

  argomento!: string;
  questionModel = new QuestionRequest(
    this.questionId,
    0,
    '',
    0,
    this.tipoquizIdParams
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.route.params.subscribe((params: Params) => {
      this.tipoquizIdParams = params.tipoQuizId;
      console.log(this.tipoquizIdParams);
      // same as :username in route
      console.log(this.questionModel);
      this.submitted = true;
      this.route.params.subscribe((params: Params) => {
        console.log(params);
      });
      console.log(this.convertiDatainsecondi(this.questionModel.tempo));
      console.log(this.tipoquizIdParams);
      console.log(this.questionModel);
      // same as :username in route
      this.questionModel.tipoQuizId = this.tipoquizIdParams;
      this.questionModel.tempo = this.convertiDatainsecondi(
        this.questionModel.tempo
      );

      console.log(this.questionModel);

      this.quizService.putQuestion(this.questionModel).subscribe((error) => {
        this.ngOnInit();
        location.reload();
        throwError(error);
        console.log(this.questionModel);
      });
    });
  }
  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 8);
  }
  convertiDatainsecondi(hms: string) {
    if (hms != '0' || hms != undefined) {
      var a = hms.split(':');
      var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
      console.log(seconds);
    }
    return seconds;
  }

  // minutes are worth 60 seconds. Hours are worth 60 minutes.

  get diagnostic() {
    return JSON.stringify(this.questionModel);
  }

  show() {
    return (this.mostra = true);
  }
  show2() {
    if (!this.mostra2) return (this.mostra2 = true);
    else return (this.mostra2 = false);
  }
  deleteQuestion(id = '') {
    this.questionDelete = {
      questionId: id,
    };

    this.quizService.deleteQuestion(this.questionDelete).subscribe((error) => {
      this._location.back();
    });
    this._location.back();
  }
  backClicked() {
    this._location.back();
  }

  tipoQuizRequest: TipoQuizUpdate = {
    argomento: '',
  };
  updateNAME() {
    this.quizService
      .updateArgumentQuiz(this.tipoQuizRequest, this.tipoquizIdParams)
      .subscribe((error) => {
        throwError(error);
        this.ngOnInit();
      });
    this.ngOnInit();
  }

  tipoQuizDelete!: TipoQuizDelete;
  tipoQuizdelete() {
    this.tipoQuizDelete = {
      tipoQuizId: this.tipo.tipoQuizId,
    };
    console.log(this.tipo.tipoQuizId);
    this.quizService.TipoQuizDelete(this.tipoQuizDelete).subscribe((error) => {
      throwError(error);
      this._location.back();
      this.ngOnInit();
    });
    this.ngOnInit();
  }
}
