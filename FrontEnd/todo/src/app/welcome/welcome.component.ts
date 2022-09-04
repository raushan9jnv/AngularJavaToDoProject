            //JAVA vs Typescript

//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';


//ComponentScan(value= "com.in28minutes.springboot.web")  // annoatation
@Component({   // decorator
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public Class SpringBootFirstWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {

  //String message = "some welcome message"     //Only double quote use for string in java
  message ='some welcome message' 
  name = ''             //single or double quote bothe can be used in javascript or typescript

  //public SpringBootFirstWebApplication
  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { 

    }

  //void init(){
  ngOnInit() {
    // this.message=5;      WILL GIVE US COMPILATION ERROR AS it is string

  // OR ngOnIt() : void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
    this.service.executeHelloWorldBeanService().subscribe();
    this.service.executeHelloWorldBeanService().subscribe();
    // console.log("get Welcome message");
  }

}



export class Class1{

}

export class Class2{

}
