package com.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.dao.QuizDAO;
import com.quiz.model.Question;
import com.quiz.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	QuizDAO dao;
	
	
	@Override
	public List<Question> getAllQuestions() {
		
		return dao.findAll();
	}
	
	@Override
	public Question createQuestion(Question question) {
		
		return dao.save(question);
	}

}
