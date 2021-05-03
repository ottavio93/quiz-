import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { throwError } from 'rxjs';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-play-risposte',
  templateUrl: './play-risposte.component.html',
  styleUrls: ['./play-risposte.component.css'],
})
export class PlayRisposteComponent implements OnInit {
  domanda: any;
  constructor(private quizService: QuizService) {}
  risposte!: any[];
  risMultiple: any = '';
  indicirispmult: any[] = [];
  submitted = false;
  inserita = false;
  value!: any;
  @Input() parentData!: string;

  @Output() rispostaChanged: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log(this.parentData);
    this.quizService.getplayAllAnswer(this.parentData).subscribe((data) => {
      this.risposte = data;
      console.log(this.risposte);
    });
    this.quizService.getQuestion(this.parentData).subscribe((data) => {
      this.domanda = data;
      console.log(this.domanda.rispostaMultipla);
    });
  }

  valueChange = function (item: any) {
    alert(item.value);
  };

  isChecked!: any;
  isCheckedName!: any;
  checkboxData = [1, 2, 3, 4, 5, 6, 7, 8];
  onChange(e: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

  // @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
  //   event.returnValue = false;
  // }
  aggiungirisp(risp: string) {
    console.log(risp);
    this.risMultiple.concat(risp);
  }
  getRisposta(risp: any) {
    console.log(risp);

    this.rispostaChanged.emit(risp);
  }
  getrispostamult(risp: any) {
    this.risMultiple = this.risMultiple.concat(risp);
    console.log(this.risMultiple);
    this.rispostaChanged.emit(this.risMultiple.toString());
  }

  removerispostamult2(risp: any) {
    console.log(risp);
    this.risMultiple = this.risMultiple.replace(risp, '');
    console.log(this.risMultiple);
    this.rispostaChanged.emit(this.risMultiple.toString());
  }
  onClick(risp: any) {
    !this.risMultiple.includes(risp)
      ? this.getrispostamult(risp)
      : this.removerispostamult2(risp);
  }
}
