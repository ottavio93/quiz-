import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { QuizService } from '../_services/quiz.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  content: string;
  quiz!: any[];

  constructor(
    private userService: UserService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.quizService.getAllQuiz().subscribe((data) => {
      this.quiz = data;
      console.log(data);
    });
  }
}
