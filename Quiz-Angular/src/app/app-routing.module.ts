import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { ReviewComponent } from './review/review.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  {path : '' , component: StartPageComponent},
  {path : 'questions',component : QuestionListComponent},
  {path : 'review' , component : ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
