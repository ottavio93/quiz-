import { Component, OnInit } from '@angular/core';
import { QuizService } from '../_services/quiz.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  content: '';
  username = '';
  constructor(
    private userService: UserService,
    private quizService: QuizService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    this.userService.getUserBoard().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.quizService.getAllQuizByUsername(this.username).subscribe(
      (data) => {
        this.content = data;
        console.log(this.content);
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
