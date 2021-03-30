import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/component/user.service';

import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  })
export class UserComponent implements OnInit {
  showSuccessMessage :boolean;
  color: ThemePalette = 'primary';
  login=true;
  signup=false;
  isLooding = false;
  private _router: Subscription;
 userIsAuthonticated = false;
  constructor(private authService:UserService) { }

  ngOnInit(): void {
    this._router =this.authService.getAuthStatusListner().subscribe(isAuthontication=>{
      this.userIsAuthonticated=isAuthontication;
    })
}

logins(){
  this.login =true;
  this.signup=false;
}
signups(){
  this.signup=true;
  this.login=false;
}
onLogin(form:NgForm){
  console.log(form.value);
  if (form.invalid){
    return
  }
  this.isLooding=true;
  this.authService.login(form.value.email,form.value.password);
  }
  onSignup(form:NgForm){
    console.log(form.value)
    if(form.invalid){
      return;
    }
    this.authService.createUser(form.value.fullName,form.value.email,form.value.password);
    this.isLooding=true;
  }
}
