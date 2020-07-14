import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http'
import { QuestionService } from './question.service';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { StartPageComponent } from './start-page/start-page.component'
@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    ReviewComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
