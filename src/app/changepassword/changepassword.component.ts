import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { Router } from '@angular/router';
import { JachgharformService } from '../jachgharform.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OldPwdValidators } from './old-pwd.validators';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public currentPassword;
  public password;
  public confirmedPassword;
  public loginCount;
  constructor(
   private apiservice: JachgharformService,
    private router: Router,
    private location: Location,
    fb: FormBuilder
) {}
      ngOnInit(): void {
  }

  changepassword(password) {
    // password['_id'] = this.globals.user['_id']

    this.apiservice.postData("api/resetPassword", {'query':password})
      .subscribe(
        result => {
          console.log(result)
          localStorage.setItem('count','1')

          this.location.back()
        },
        error => {

        }
      );
  }

}
