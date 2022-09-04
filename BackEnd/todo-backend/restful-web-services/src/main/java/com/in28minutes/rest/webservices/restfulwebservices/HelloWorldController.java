package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200") //give permission to frontend to use api --> origins define handle only for this URL only
@RestController
public class HelloWorldController {

		//GET
		//URI- /hello-world
		// method - "Hello World"
	
		@GetMapping(path = "/hello-world")
		public String helloWorld() {
			return "Hello World";
		}
		
		//hello-world-bean
		@GetMapping(path = "/hello-world-bean")
		public HelloWorldBean helloWorldBean() {
			return new HelloWorldBean("Hello World");  //this bean automatically converted to JSON
		}
		
		//hello-world/path-variable/in28minutes
		@GetMapping(path = "/hello-world/path-variable/{name}")
		public HelloWorldBean helloWorldPathVaibale(@PathVariable String name) {
			return new HelloWorldBean(String.format("Hello World, %s", name)); 
			//http://localhost:8080/hello-world/path-variable/in28minutes   -->     {"message":"Hello World, in28minutes"}
		}
}

