package com.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.support.DaoSupport;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.controller.QuizController;
import com.quiz.dao.QuizDAO;
import com.quiz.model.Question;
import com.quiz.service.QuizService;
import com.quiz.service.impl.QuizServiceImpl;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SpringBootQuizApplication {


	public static void main(String[] args) {
		
		SpringApplication.run(SpringBootQuizApplication.class, args); 
	}
	
	@Bean
	CommandLineRunner runner(QuizDAO dao) {
		dao.save(new Question("Light year is a unit of ","Speed","Time","Weight","Intensity" ,"Time"));
		dao.save(new Question("Roughly how many minutes does it take for the Light from the Sun to reach us","3","5","8","13" ,"8"));
		dao.save(new Question("Smallest planet in the Solar System","Mercury","Neptune","Mars","Venus","Mercury"));
		dao.save(new Question("The largest volcano in the solar system, Mt.Olympus Mons, is in which planet","Jupiter","Mars","Venus","Earth" ,"Mars"));
		dao.save(new Question("How many moons does mars have?","1","2","3","4" ,"2"));
		dao.save(new Question("The moons Oberon and Titania belong to which planet","Jupiter","Saturn","Uranus","Neptune" ,"Uranus"));
		dao.save(new Question("Which planet has the most number of moons","Uranus"," Jupiter","Earth","Saturn" ,"Jupiter"));
		dao.save(new Question("Which is the hottest planet in the Solar System","Earth","Mercury","Mars","Venus" ,"Venus"));
		dao.save(new Question("Halley's Comet passes near Earth when making its orbit every ___ years","50","75","82","101" ,"75"));
		dao.save(new Question("The largest moon in the Solar System, Ganymede, belongs to which planet?","Saturn","Neptune","Uranus","Jupiter" ,"Jupiter"));
		return null;
		
	}
	
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.quiz")).build();
	}
	
}
