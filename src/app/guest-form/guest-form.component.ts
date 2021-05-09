import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CanDeactivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { EnableUserRequest } from '../dto/EnableUserRequest';
import { PlayQuizResponse } from '../dto/PlayQuiz';
import { AuthService } from '../_services/auth.service';
import { ComponentCanDeactivate } from '../_services/ComponentCanDeactivate';
import { QuizService } from '../_services/quiz.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css'],
})
export class GuestFormComponent
  implements OnInit, CanDeactivate<ComponentCanDeactivate> {
  @Output() playIdquiz: EventEmitter<String> = new EventEmitter();
  @Output() mostrabottone: EventEmitter<String> = new EventEmitter();
  canDeactivate(component: ComponentCanDeactivate): boolean {
    if (!component.canDeactivate()) {
      if (
        confirm(
          'You have unsaved changes! If you leave, your changes will be lost.'
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  mostraformcredenziali=true
  onereload = false;
  quizForm!: FormGroup;
  playQuizIdRandom = this.randomId();
  nome=""
  model2=null
  constructor(
    private router: Router,
    public fb: FormBuilder,
    private quizService: QuizService,
    private localStorage: LocalStorageService,
    private authService :AuthService,
    private tokenStorage: TokenStorageService
  ) {}
  username = this.localStorage.retrieve('userName');
  ngOnInit() {
    if (localStorage.getItem('sss') != '4') {
      localStorage.setItem('sss', '4');
      location.reload();
    }
    this.nome = this.tokenStorage.getUser().username;
    console.log(this.nome)
    this.model2=new EnableUserRequest(this.nome);

  }

  model = new PlayQuizResponse(this.playQuizIdRandom, '', '', '');
  

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.playQuizIdRandom);
    console.log(this.model2);
    this.playIdquiz.emit(this.playQuizIdRandom);
    this.quizService.putPlayQuiz(this.model).subscribe((error) => {
      this.ngOnInit();
      throwError(error);
      console.log(this.model);
    });
  this.mostraformcredenziali=false
  this.stateChange(-1)
  this.authService.disableUser(this.model2).subscribe((data)=>{
    console.log(data);
    console.log(this.model2);
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



  stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
          this.authService.disableUser(this.model2).subscribe((data)=>{
            console.log(data);
            console.log(this.model2);
          });
        }
    }, 15000);
}
}
