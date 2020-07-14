import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url : string;
  private examinee : string;
  private email_id :string;
  private questions :Question[];

  constructor(private http : HttpClient) {
    this.url = "http://localhost:9010/questions";
   }

  public getQuestions() : any{
    return this.http.get<Question[]>(this.url);
  }

  setTest(questions :Question[]){
    this.questions = questions;
  }

  getTest() : any{
    return this.questions;
  }

  setname(name : string){
    this.examinee = name;
  }
  getname(): string{
    return this.examinee;
  }
  setMail(email_id : string){
    this.email_id = email_id;
  }
  getMail() : string{
    return this.email_id;
  }

}
