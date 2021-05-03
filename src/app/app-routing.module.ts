import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UploadQuizComponent } from './upload-quiz/upload-quiz.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { InserisciDomandeComponent } from './inserisci-domande/inserisci-domande.component';
import { PartecipaQuizComponent } from './partecipa-quiz/partecipa-quiz.component';
import { QuizReportsComponent } from './quiz-reports/quiz-reports.component';
import { DetailsreportsComponent } from './detailsreports/detailsreports.component';
import { UserReportComponent } from './user-report/user-report.component';
import { AggiungiUtenteQuizComponent } from './aggiungi-utente-quiz/aggiungi-utente-quiz.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'uploadQuiz', component: UploadQuizComponent },
  { path: 'quizDetails/:quizId', component: QuizDetailsComponent },
  { path: 'questions/:tipoQuizId', component: InserisciDomandeComponent },
  { path: 'quiz/:idQuiz', component: PartecipaQuizComponent },
  { path: 'quizReport', component: QuizReportsComponent },
  { path: 'quizUserReport', component: UserReportComponent },
  { path: 'detailquizReport/:playQuizId', component: DetailsreportsComponent },
  { path: 'aggiungi-utente', component: AggiungiUtenteQuizComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
