package com.timeln;

import com.timeln.model.LocalTime;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;


@SpringBootApplication
public class TimelnApplication {

	static LocalTime localTime;

	public static void main(String[] args) {

		String dateFormated = String.valueOf(LocalDateTime.now());

		System.out.println(localTime.dateAndTimeFormated(dateFormated));
		SpringApplication.run(TimelnApplication.class, args);
	}

}
