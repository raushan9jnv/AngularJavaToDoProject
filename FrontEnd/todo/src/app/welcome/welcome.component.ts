            //JAVA vs Typescript

//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


//ComponentScan(value= "com.in28minutes.springboot.web")  // annoatation
@Component({   // decorator
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public Class SpringBootFirstWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {

  //String message = "some welcome message"     //Only double quote use for string in java
  message ='some welcome message'              //single or double quote bothe can be used in javascript or typescript

  //public SpringBootFirstWebApplication
  constructor() { }

  //void init(){
  ngOnInit() {
    // this.message=5;      WILL GIVE US COMPILATION ERROR AS it is string

  // OR ngOnIt() : void {
  }

}

export class Class1{

}

export class Class2{

}
