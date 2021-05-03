import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { throwError } from 'rxjs';
import { TipoQuizRequest } from '../dto/TipoQuiz';
import { QuizService } from '../_services/quiz.service';
import { Location } from '@angular/common';
import { TipoQuizDelete } from '../dto/TipoQuizDelete';
@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css'],
})
export class QuizDetailsComponent implements OnInit {
  idQuiz!: any;
  paramId!: any;

  tipiQuiz!: any;
  mostra = false;
  tipoQuizId = this.randomId();
  quiId!: any;
  mostratitolo = false;
  QuizNome: string;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params); // same as :username in route
      this.paramId = params;
      this.getAllQuiz(params.quizId);
      this.idQuiz = params.quizId;
      console.log(this.idQuiz);
      this.quizService.getAllTipiQuizbyId(params.quizId).subscribe((data) => {
        console.log(data);
        this.tipiQuiz = data;
        if (this.tipiQuiz.length != 0) {
          this.mostratitolo = true;
        }
      });

      this.quizService.getQuizById(params.quizId).subscribe((data) => {
        console.log(data.nome);
        this.QuizNome = data.nome;
      });
    });
  }

  getAllQuiz(model: number) {
    this.quizService.getAllTipiQuizbyId(model).subscribe((data) => {
      console.log(data);
    });
  }
  show() {
    this.mostra = true;
    console.log('dddd' + this.mostra);
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  argomento!: string;
  model: TipoQuizRequest = {
    tipoQuizId: this.tipoQuizId,
    argomento: '',
    idQuiz: this.quiId,
  };

  submitted = false;

  onSubmit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.quiId = params.quizId;
      console.log(this.quiId);
      // same as :username in route

      this.submitted = true;
      this.route.params.subscribe((params: Params) => {
        console.log(params);
      });

      console.log(this.quiId);
      // same as :username in route
      this.model.idQuiz = this.quiId;
      console.log(this.model);

      this.quizService.putArgumentQuiz(this.model).subscribe((error) => {
        this.ngOnInit();
        throwError(error);
        console.log(this.model);
      });
    });
    location.reload();
  }

  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 8);
  }
  backClicked() {
    this._location.back();
  }
}
