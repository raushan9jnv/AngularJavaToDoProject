import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =[
    {id : 1, description : 'Learn to Dance'},
    {id : 2, description : 'become an Expert at Angular'},
    {id : 3, description : 'Visit India'},
    {id :4, description : 'Raushan is Here'}
  ]

  // todo={
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit() {
  }

}
