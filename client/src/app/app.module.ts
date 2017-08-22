import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from "./user.service";
import { LandingComponent } from './landing/landing.component';
import { QuestionComponent } from './question/question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { HomeComponent } from './home/home.component';
import { FiltersearchPipe } from './filtersearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuestionComponent,
    NewAnswerComponent,
    NewQuestionComponent,
    HomeComponent,
    FiltersearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
