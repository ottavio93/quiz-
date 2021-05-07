import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  CanDeactivate,
  NavigationStart,
  Params,
  Router,
} from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { config } from 'rxjs';
import { Subscription, throwError } from 'rxjs';
import { AnswerResponse } from '../dto/AnswerResponse';
import { AuthService } from '../_services/auth.service';
import { QuizService } from '../_services/quiz.service';
import { TokenStorageService } from '../_services/token-storage.service';

export let browserRefresh = false;

@Component({
  selector: 'app-partecipa-quiz',
  templateUrl: './partecipa-quiz.component.html',
  styleUrls: ['./partecipa-quiz.component.css'],
})
export class PartecipaQuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
     private tokenStorage: TokenStorageService
  ) {}
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showAdminBoard = false;
  showModeratorBoard = false;
  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    console.log('Processing beforeunload...');
    event.returnValue = false;
    this.isLoggedIn=false
  }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {
  //   if (!this.canDeactivate(this.Component)) {
  //     $event.returnValue = true;
  //   }
  // }
  playIdQuizRes!: string;
  username!: string;
  show = true;
  showEnd = false;
  domanda!: any;
  IdRandom = this.randomId();
  submitted = false;
  Counter = 5;
  showForm = true;
  showUserForm = true;
  quiId!: any;
  listaDomande!: any;
  status = 'start';
  verita = false;
  userIndex = 0;
mostraform1=false
  isUserQuiz=true
  @ViewChild('cnt') counter!: CountdownComponent;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    this.mostraform1=false;
console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }








    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

  
    if (sessionStorage.getItem('auth-token') != null) {

      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }

    //      @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
    // this.countdown.begin();
  }
  onSubmitLogin(): void {
 
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      
        this.mostraform1=true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      }
    );
    if (this.roles[0]=="ROLE_USER"){
      this.isUserQuiz=false
    }

  }
  mostraForm() {
    return (this.showForm = true);
  }
  nascondiForm() {
    return (this.showForm = false);
  }

  changeIndex(number: number) {
    if (
      (this.userIndex > 0 && number < 0) || //index must be greater than 0 at all times
      (this.userIndex < this.listaDomande.length && number > 0)
    ) {
      //index must be less than length of array
      this.userIndex += number;
    }
  }

  quiz() {
 
    if (sessionStorage.getItem('auth-token') != null) {
      console.log('invia quiz');
      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.quiId = params.idQuiz;
        console.log(this.quiId);

        this.quizService.getAllQuestionQuiz(this.quiId).subscribe((data) => {
          console.log(data);

          this.listaDomande = data;
             
          localStorage.setItem('dataSource', '3');
          console.log(      this.listaDomande );
          // localStorage.setItem('dataSource', '3');
        });
      });
      this.show = false;
      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.quiId = params.idQuiz;
        console.log(this.quiId);

        this.quizService.getAllQuestionQuiz(this.quiId).subscribe((data) => {
        

          this.listaDomande = data;
         
            console.log(this.listaDomande);
          // localStorage.setItem('dataSource', '3');
        });
      });
      this.show = false;
    }
    if (
      sessionStorage.getItem('auth-token') == null &&
      localStorage.getItem('dataSource') == null
    ) {
      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.quiId = params.idQuiz;
        console.log(this.quiId);

        this.quizService.getAllQuestionQuiz(this.quiId).subscribe((data) => {
          console.log(data);

          this.listaDomande = data;
          
          localStorage.setItem('dataSource', '3');
          console.log(      this.listaDomande );
        });
      });
      this.show = false;
      if (
        sessionStorage.getItem('auth-token') == null &&
        localStorage.getItem('dataSource') != null
      )
        document.write("contatta l'autore del quiz");
    }
  }

  public doSomething(name: any): void {
    console.log(name);
    this.domanda = name;
    console.log(this.domanda);
    return this.domanda;
  }
  public mettiQuizId(name: any) {
    console.log(name);
    this.playIdQuizRes = name;
    console.log(this.playIdQuizRes + 'ddddddddddddddddddddddd');
    return this.playIdQuizRes;
  }

  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 8);
  }
  answerResponse = new AnswerResponse(
    'this.IdRandom',
    13,
    this.domanda,
    '',
    ''
  );
  onSubmit(idq: any, left: number) {
    console.log(left);
    this.answerResponse.answerId = this.randomId();
    this.answerResponse.tempo = left;
    this.answerResponse.answer = this.domanda;

    this.answerResponse.questionId = idq;
    this.answerResponse.playQuizId = this.playIdQuizRes;
    this.submitted = true;
    console.log(this.answerResponse);
    this.quizService.putPlayAnswer(this.answerResponse).subscribe((error) => {
      console.log(error);
      throwError(error);
      console.log(this.answerResponse);
    });
    this.userIndex++;
this.showEnd=true
    // console.log((this.counter.event.isStopped = true));

    // this.listaDomande[i - 1].tempo;
  }

  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }
  identify(index: any, item: { question: any }) {
    return item.question;
  }
  aum() {
    this.userIndex++;
  }
 

  

}
