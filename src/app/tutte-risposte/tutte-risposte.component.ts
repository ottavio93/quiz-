import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { AnswerDelete } from '../dto/AnswerDelete';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-tutte-risposte',
  templateUrl: './tutte-risposte.component.html',
  styleUrls: ['./tutte-risposte.component.css'],
})
export class TutteRisposteComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  risposte!: any[];
  answerDelete!: AnswerDelete;
  @Input() parentData!: string;
  ngOnInit() {
    console.log(this.parentData);
    this.quizService.getAllAnswer(this.parentData).subscribe((data) => {
      this.risposte = data;
      console.log(this.risposte);
    });
  }
  deleteAnswer(id = '') {
    this.answerDelete = {
      answerId: id,
    };

    this.quizService.answerDelete(this.answerDelete).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
    this.ngOnInit();
  }
}
