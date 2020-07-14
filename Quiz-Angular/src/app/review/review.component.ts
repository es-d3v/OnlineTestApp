import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionListComponent } from '../question-list/question-list.component';
import { Question } from '../question';
import { of } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private questions : Question[];
  private total : number = 0;
  private percentage : number;
  private examinee : string;
  private email_id : string;
  constructor(private service: QuestionService) { 
    
  }

  ngOnInit() {
    this.examinee = this.service.getname();
    this.email_id = this.service.getMail();
    this.questions = this.service.getTest();
    this.testReview();
    
  }

  testReview(){
    for(let question of this.questions){
      let ans :string;
      let correctans :string;
      if(question.userInput.toLowerCase().localeCompare(question.correctAnswer.toLowerCase()) == 0)
        question.mark = 1;
      else  
        question.mark = 0;
      this.total += question.mark;
    }
    this.percentage = (this.total/this.questions.length)*100;
  }
}
