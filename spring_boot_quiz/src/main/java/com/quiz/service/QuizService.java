package com.quiz.service;

import java.util.List;

import com.quiz.model.Question;

public interface QuizService {

	public List<Question> getAllQuestions();
	public Question createQuestion(Question question);
	
}
