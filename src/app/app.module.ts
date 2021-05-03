import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UploadQuizComponent } from './upload-quiz/upload-quiz.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CommonModule } from '@angular/common';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { InserisciDomandeComponent } from './inserisci-domande/inserisci-domande.component';
import { InsRisposteComponent } from './ins-risposte/ins-risposte.component';
import { TutteRisposteComponent } from './tutte-risposte/tutte-risposte.component';
import { PartecipaQuizComponent } from './partecipa-quiz/partecipa-quiz.component';
import { CountdownModule } from 'ngx-countdown';
import { PlayRisposteComponent } from './play-risposte/play-risposte.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { QuizReportsComponent } from './quiz-reports/quiz-reports.component';
import { DetailsreportsComponent } from './detailsreports/detailsreports.component';
import { UserReportComponent } from './user-report/user-report.component';
import { AggiungiUtenteQuizComponent } from './aggiungi-utente-quiz/aggiungi-utente-quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    UploadQuizComponent,
    QuizDetailsComponent,
    InserisciDomandeComponent,
    InsRisposteComponent,
    TutteRisposteComponent,
    PartecipaQuizComponent,
    PlayRisposteComponent,
    GuestFormComponent,
    QuizReportsComponent,
    DetailsreportsComponent,
    UserReportComponent,
    AggiungiUtenteQuizComponent,
  ],
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    CountdownModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,

    NgxWebstorageModule.forRoot(),

    BrowserAnimationsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
