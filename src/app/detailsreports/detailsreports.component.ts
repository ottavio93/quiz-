import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { QuizService } from '../_services/quiz.service';
import { GiudizioPsi } from '../dto/giudizioPsi';
import { playAnsweroIdObj } from '../dto/playAnsweroIdObj';
import { PlayQuizObj } from '../dto/PlayQuizObj';
import { GiudizioGlobal } from '../dto/GiudizioGlobal';
@Component({
  selector: 'app-detailsreports',
  templateUrl: './detailsreports.component.html',
  styleUrls: ['./detailsreports.component.css'],
})
export class DetailsreportsComponent implements OnInit {
  paramId!: any;
  allAnswer!: any;
  questionForm!: FormGroup;
  titoloquiz: string;
  risposta!: any;
  risposta2!: any;
  risposte: any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params); // same as :username in route
      this.paramId = params;
      this.quizService
        .getAllAnswerByQuizId(params.playQuizId)
        .subscribe((data) => {
          console.log(data);
          this.allAnswer = data;
          this.titoloquiz = this.allAnswer[0].question.tipoQuiz.quiz.nome;
        });
    });
  }
  giudizioPsi = new GiudizioPsi(this.paramId, '');
  giudizioGlobal = new GiudizioGlobal(this.paramId, '');

  backClicked() {
    this._location.back();
  }
  onSubmit() {
    console.log('2222222222222222222');
    this.giudizioPsi.playQuizId = this.paramId.playQuizId;
    this.giudizioPsi.giudizionpsi = this.risposta;

    this.quizService.putGiudizioPsi(this.giudizioPsi).subscribe((error) => {
      throwError(error);
      console.log(this.giudizioPsi);
    });
  }

  onSubmitGlobal() {
    console.log('2222222222222222222');
    this.giudizioGlobal.playQuizId = this.paramId.playQuizId;
    this.giudizioGlobal.giudizionglobal = this.risposta2;

    this.quizService
      .putGiudizioGlobal(this.giudizioGlobal)
      .subscribe((error) => {
        throwError(error);
        console.log(this.giudizioPsi);
      });
  }

  answerId = new playAnsweroIdObj('');

  onTrue(id: string, domandaId: string) {
    console.log(domandaId);
    this.quizService.getplayAllAnswer(domandaId).subscribe((data) => {
      this.risposte = data;
      console.log(this.risposte);

      if (this.risposte.length == 1) {
        this.answerId.answerId = id;
        console.log(this.answerId);
        this.quizService.puttrue(this.answerId).subscribe((error) => {
          throwError(error);
          location.reload();
        });
      }
    });
  }
  quizId = new PlayQuizObj('');
  approvato() {
    this.quizId.playquizId = this.paramId.playQuizId;
    console.log(this.quizId);
    this.quizService.updateApprovato(this.quizId).subscribe((data) => {
      data;
      location.reload();
    });
  }
}
