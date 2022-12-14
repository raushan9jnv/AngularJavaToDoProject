import { Component, OnInit } from '@angular/core';

//Future work
// - No navigation menu and Footer
// - Formatting -Bootstraps
// - No security for menus
// - Hardcoded logic in the TOdoList and Login components
// - Remaining functionality - Edit, Delete, add
// - Spring Boot
// - Spring security

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =[
    new Todo(1,'Learn to Dance',false, new Date()), // took from Todo class
    new Todo(2,'become an Expert at Angular',false, new Date()),
    new Todo(3,'Visit India',false, new Date()),
    new Todo(4,'Raushan is Here',false, new Date())
    
    // {id : 1, description : 'Learn to Dance'},
    // {id : 2, description : 'become an Expert at Angular'},
    // {id : 3, description : 'Visit India'},
    // {id : 4, description : 'Raushan is Here'}
  ]

  // todo={
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit() {
  }

}
