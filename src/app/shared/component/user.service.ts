import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User}from './user.model';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private contactsUrl = 'http://localhost:8080/api/login';
 private authStatusListner = new Subject<boolean>();
 showSuccessMessage:boolean;
 servererrorMessage:string;
 public isAunthenticated =false;
 private token:string;
 private timerTocken : any;
 private userId:string;

  constructor(private http:HttpClient,private router:Router,private toster: ToastrService) { }
  getAuthStatusListner(){
    return this.authStatusListner.asObservable();
  }

  createUser(fullName:string,email: string,password:string){
    const authData:User={fullName:fullName,email:email,password:password};
    this.http.post('api/register',authData).subscribe(()=>{
     this.toster.success("you are signup now you can login you page ...");
     this.showSuccessMessage =true;
     this.router.navigate(['/signup']);
    res => {

      setTimeout(() => {
        this.showSuccessMessage =false,4000
      });
    }
   },error=>{
    //  this.authStatusListner.next(false);
    if(error.status === 422){
      this.servererrorMessage = error.error.join('<br />')
    }
   });
  }
// icut it this from login or signup http://localhost:3000/
  login(email:string,password:string) {
    const authData ={email:email,password:password};
    this.http.post<{token:string,expiresIn:number,userId:string}>('api/login',authData)
    .subscribe(response=> {
      // console.log(response)
      const token =response.token
    this.token = token;
    // console.log(this.token)
    if(token){
      const expireinDuration = response.expiresIn;
      this.setAuthTime(expireinDuration)
      this.isAunthenticated=true ;
       this.authStatusListner.next(true);
       this.userId = response.userId
       const now =new Date();
       const expirationDate =new Date(now.getTime()+ expireinDuration* 1000)
       this.saveAuthDate(token,expirationDate,this.userId)
       this.router.navigate(['/dashboard']);
       this.toster.success("you are successfully login");
    }
    },error=>{
      this.authStatusListner.next(false);
      this.toster.error("User not Match..");
    })
  }
  getToken(){
    if(this.token !=undefined){
      return this.token;
    }
  }

  getIsAuth(){
    return this.isAunthenticated;
  }

  getUserId(){
    return this.userId
  }

  LogOut(){
    this.token = null;
    this.isAunthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(['/signup']);
    this.cleareAuthData();
    this.userId =null;
    clearTimeout(this.timerTocken)
    this.toster.success("you are logout");
  }

  private setAuthTime(duration:number){
    console.log('setting timer'+ duration)
    this.timerTocken= setTimeout(() => {
      this.LogOut();
    }, duration*1000);
  }

  private cleareAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem("userId");

  }
  private saveAuthDate(token:string,expireinDate:Date,userId:string){
    localStorage.setItem('token',token);
    localStorage.setItem('expiration',expireinDate.toISOString());
    localStorage.setItem("userId",userId);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if(!authInformation){
      return
    }
    const now = new Date();
    const expireIn = authInformation.expireinDate.getTime() - now.getTime();
    if(expireIn > 0){
      this.token = authInformation.token;
      this.isAunthenticated =true;
      this.userId =authInformation.userId
      this.authStatusListner.next(true);
      this.setAuthTime(expireIn/1000)
    }
  }
  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId=localStorage.getItem("userId");
    if(!token || !expirationDate){
      return;
    }

    return {
      token:token,
      expireinDate:new Date(expirationDate),
      userId:userId
    }
  }
}
