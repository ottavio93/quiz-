import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../_services/auth.service';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-quiz-reports',
  templateUrl: './quiz-reports.component.html',
  styleUrls: ['./quiz-reports.component.css'],
})
export class QuizReportsComponent implements OnInit {
  allReports!: any[];
  allPunteggio: number[] = [];
  sho = false;
  constructor(
    private authService: AuthService,
    private quizService: QuizService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem('auth-token') != null) this.sho = true;
    this.quizService.getAllReports().subscribe((data) => {
      this.allReports = data;
      console.log(data);

      for (let index = 0; index < this.allReports.length; index++) {
        const element = this.allReports[index].playQuizId;
        this.quizService.getpunteggioTotale(element).subscribe((data) => {
          console.log(data);
          this.allReports[index].total = data;
          this.allPunteggio.push(data);
        });
      }
      for (let index = 0; index < this.allReports.length; index++) {
        this.allReports[index].total = this.allPunteggio[index];
      }

      console.log(this.allReports);
    });
  }
}
