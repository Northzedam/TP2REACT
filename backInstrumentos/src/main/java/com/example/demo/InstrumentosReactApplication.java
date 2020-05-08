package com.example.demo;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationHome;


@SpringBootApplication
public class InstrumentosReactApplication {

	private static File home;
	
	public static void main(String[] args) {
		SpringApplication.run(InstrumentosReactApplication.class, args);
	}

	public static File getHome() {
		ApplicationHome home = new ApplicationHome(InstrumentosReactApplication.class);
		return home.getSource();
	}

}
