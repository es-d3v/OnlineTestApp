import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { RouterLink, Router } from '@angular/router';
import { read } from 'fs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  private examinee : string;
  private email_id :string;
  constructor(private service : QuestionService,private router :Router) { }

  ngOnInit() {
  }
  startTest(){
    if(this.examinee == null || this.examinee == undefined || this.examinee == ""){
     document.getElementById("name").style.background= "orange";
     document.getElementById("name").focus();
    }
    else{
      
      document.getElementById("name").style.background= "#c8cae0";
      if(this.email_id == null || this.email_id == undefined || this.email_id == ""){
        document.getElementById("email").style.background= "orange";      
        document.getElementById("email").focus();

      }
      else{
        this.service.setname(this.examinee);
        this.service.setMail(this.email_id);
        this.router.navigate(['/questions']);
      }
    }
  }


}
