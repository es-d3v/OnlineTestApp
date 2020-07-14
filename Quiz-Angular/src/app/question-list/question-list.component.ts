import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  private questions :Question[];
  private question : Question;
  private currentQuestion : number;
  constructor(private service : QuestionService) { }

  ngOnInit() {
     this.service.getQuestions().subscribe(res=>{
        this.questions = res;
      for(let question of this.questions)
        question.userInput= "";
      this.question =  new Question();
      this.question = this.questions[0];
      this.currentQuestion=0;
     });
  }

  nextQuestion(){
    this.currentQuestion++;
    // document.getElementById("prevButton").style.display = 'block';
    if(this.currentQuestion == (this.questions.length-1)){
      this.currentQuestion = this.questions.length-1;
      document.getElementById("nextButton").style.display = 'none';
      document.getElementById("submitTest").style.display = 'block'
    }
    this.question = this.questions[this.currentQuestion];
    document.getElementById("option1").style.backgroundColor = "#d90";
    document.getElementById("option2").style.backgroundColor = "#d90";
    document.getElementById("option3").style.backgroundColor = "#d90";
    document.getElementById("option4").style.backgroundColor = "#d90";
  }

  prevQuestion(){
    this.currentQuestion--;
    document.getElementById("nextButton").style.display = 'block'
    if(this.currentQuestion == 0)
      document.getElementById("prevButton").style.display = 'none'
    this.question = this.questions[this.currentQuestion];
  }

  submitTest(){
    
    this.service.setTest(this.questions);
  }

  option1Select(){
    this.optionSelected("option1");
  }

  option2Select(){
    this.optionSelected("option2");
  }
  
  option3Select(){
    this.optionSelected("option3");
  }

  option4Select(){
    this.optionSelected("option4");
  }

  optionSelected(id: string){
    document.getElementById("option1").style.backgroundColor = "#d90";
    document.getElementById("option2").style.backgroundColor = "#d90";
    document.getElementById("option3").style.backgroundColor = "#d90";
    document.getElementById("option4").style.backgroundColor = "#d90";
    
    document.getElementById(id).style.backgroundColor = "green";

    this.question.userInput = document.getElementById(id).innerText;
  }

}
