import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizModel } from '../dto/QuizModel';
import { environment } from 'src/environments/environment';
import { TipoQuizRequest } from '../dto/TipoQuiz';
import { QuestionRequest } from '../dto/Question';
import { AnswerRequest } from '../dto/AnswerModel';
import { QuestionDelete } from '../dto/QuestionDelete';
import { TipoQuizDelete } from '../dto/TipoQuizDelete';
import { QuizDelete } from '../dto/QuizDelete';
import { AnswerResponse } from '../dto/AnswerResponse';
import { PlayQuizResponse } from '../dto/PlayQuiz';
import { GiudizioPsi } from '../dto/giudizioPsi';
import { GiudizioGlobal } from '../dto/GiudizioGlobal';
import { playAnsweroIdObj } from '../dto/playAnsweroIdObj';
import { AnswerDelete } from '../dto/AnswerDelete';
import { TipoQuizUpdate } from '../dto/TipoQuizUpdate';
import { PlayQuizObj } from '../dto/PlayQuizObj';

const API_URL = 'https://tsi-quiz.herokuapp.com/' + 'api/test';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  putQuiz(quizModel: QuizModel): Observable<any> {
    return this.httpClient.post(
      API_URL + '/createQuiz',
      quizModel,
      this.httpOptions
    );
  }
  putArgumentQuiz(tipoQuizRequest: TipoQuizRequest): Observable<any> {
    return this.httpClient.post(
      API_URL + '/createArgomentoQuiz',
      tipoQuizRequest
    );
  }

  updateArgumentQuiz(
    tipoQuizRequest: TipoQuizUpdate,
    id: string
  ): Observable<any> {
    return this.httpClient.put(
      API_URL + '/editTipoQuiz/' + id,
      tipoQuizRequest
    );
  }

  putQuestion(questionRequest: QuestionRequest): Observable<any> {
    return this.httpClient.post(API_URL + '/createQuestion', questionRequest);
  }

  putAnswer(answerRequest: AnswerRequest): Observable<any> {
    return this.httpClient.post(API_URL + '/createAnswer', answerRequest);
  }

  putPlayAnswer(answerResponse: AnswerResponse) {
    return this.httpClient.post(API_URL + '/createPlayAnswer', answerResponse);
  }

  putPlayQuiz(playQuizResponse: PlayQuizResponse) {
    return this.httpClient.post(API_URL + '/createPlayQuiz', playQuizResponse);
  }

  getAllQuiz(): Observable<any> {
    return this.httpClient.get(API_URL + '/allQuiz');
  }
  getQuizById(QuizId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/QuizById/' + QuizId);
  }
  getAllQuizByUsername(username: string): Observable<any> {
    return this.httpClient.get(API_URL + '/user/' + username);
  }

  getAllTipiQuizbyId(id: number): Observable<any> {
    return this.httpClient.get(API_URL + '/TipiDelQuiz/' + id);
  }

  getAllQuestion(tipoQuizId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/allQuestion/' + tipoQuizId);
  }

  deleteQuestion(questionDelete: QuestionDelete): Observable<any> {
    return this.httpClient.post(API_URL + '/deleteQuestion', questionDelete);
  }

  getAllAnswer(questionId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/allanswer/' + questionId);
  }

  getplayAllAnswer(questionId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/playallanswer/' + questionId);
  }

  getAllQuestionQuiz(quizId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/allQuestionByQuiz/' + quizId);
  }
  getAllAnswerByQuizId(playquizId: string): Observable<any> {
    return this.httpClient.get(
      API_URL + '/getplayAnswerByQuizId/' + playquizId
    );
  }
  getpunteggioTotale(playquizId: string): Observable<any> {
    return this.httpClient.get(API_URL + '/punteggioTotale/' + playquizId);
  }
  getTipoQuiz(idtipoQuiz: string): Observable<any> {
    return this.httpClient.get(API_URL + '/TipoQuiz/' + idtipoQuiz);
  }
  getQuestion(idQuestion: string): Observable<any> {
    return this.httpClient.get(API_URL + '/question/' + idQuestion);
  }

  putGiudizioPsi(giudizioPsi: GiudizioPsi) {
    console.log(giudizioPsi);
    return this.httpClient.post(API_URL + '/editGiudiPsi/', giudizioPsi);
  }

  putGiudizioGlobal(giudizioGlobal: GiudizioGlobal) {
    console.log(giudizioGlobal);
    return this.httpClient.post(API_URL + '/editGiudiGlobal/', giudizioGlobal);
  }
  puttrue(answerId: playAnsweroIdObj) {
    console.log(answerId);
    return this.httpClient.post(API_URL + '/editPlayAnswer', answerId);
  }
  updateApprovato(idPlayQuiz: PlayQuizObj) {
    console.log(idPlayQuiz.playquizId);
    return this.httpClient.put(
      API_URL + '/editApprovato/' + idPlayQuiz.playquizId,
      idPlayQuiz.playquizId
    );
  }

  getAllReports(): Observable<any> {
    return this.httpClient.get(API_URL + '/allReports');
  }

  getReportsByUser(username: string): Observable<any> {
    return this.httpClient.get(API_URL + '/userplay/' + username);
  }

  deleteQuiz(quizDelete: QuizDelete): Observable<any> {
    console.log('dddddddddddddddddddd');
    return this.httpClient.post(API_URL + '/quizDelete', quizDelete);
  }

  tipoQuizId;

  answerDelete(answerDelete: AnswerDelete): Observable<any> {
    console.log('dddddddddddddddddddd');
    return this.httpClient.post(API_URL + '/answerDelete', answerDelete);
  }
  TipoQuizDelete(tipoQuizDelete: TipoQuizDelete): Observable<any> {
    console.log('dddddddddddddddddddd');
    return this.httpClient.post(API_URL + '/tipoquizDelete', tipoQuizDelete);
  }
}
