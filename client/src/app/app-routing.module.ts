import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { QuestionComponent } from './question/question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '#question/:question_id/new_answer', component: NewAnswerComponent },
  { path: 'new-question', component: NewQuestionComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LandingComponent},
  { path: '#question/:question_id', component:  QuestionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
