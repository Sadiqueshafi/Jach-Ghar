import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/component/user.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidebarOpen =true;
  opened=true;
  userIsAuthonticated =false;
  constructor(private authService:UserService) { }
  private _router: Subscription;

  ngOnInit(): void {
    this.userIsAuthonticated = this.authService.getIsAuth();

      this._router =this.authService.getAuthStatusListner().subscribe(isAuthontication=>{
        this.userIsAuthonticated=isAuthontication;
  })
}
  SidebarToggle($event){
    this.sidebarOpen = !this.sidebarOpen
  }
}
