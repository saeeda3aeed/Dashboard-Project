import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent  {

  isLoading:boolean = false
  email:string
  password:string
  public isNavigating = false;

 


  constructor(private router:Router){
  
  }

 
  
  //for saeed : give email and password to database from here
  login(){
    this.isLoading = true
    //// if email and password matches the database then navigate
    console.log(this.email)
    console.log(this.password)
    setTimeout(()=>{
    this.router.navigate(['/sidenavwrapper']) //for nabil: type name of dashboard to the component so that the router goes there
    },2000)
    
  }
  
  getEmail(email:string){
    this.email = email
  }
  getPassword(password:string){
    this.password = password
  }
}
