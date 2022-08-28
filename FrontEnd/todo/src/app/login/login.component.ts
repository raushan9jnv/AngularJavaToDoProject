import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password =''
  errorMessage = 'Invalid Credentials'
  invalidLogin =false

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);   we don't print password..mot goood pratice

    if(this.username==="in28minutes" && this.password==="dummy"){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
