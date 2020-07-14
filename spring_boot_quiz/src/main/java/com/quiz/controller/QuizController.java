package com.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.Question;
import com.quiz.service.QuizService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuizController{

	@Autowired
	private QuizService service;
	
	@GetMapping("/questions")
	public List<Question> getAllQuestions() {
		
		return service.getAllQuestions();
	}
	
	@PostMapping("/question")
	public Question createQuestion(@RequestBody Question question) {
		return service.createQuestion(question);
	}

	
}
