package com.search.springrice.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TestController {

	@GetMapping("/")
	public String test() {
		System.out.print("test");
		return "Hellow World!!";
	}
}
