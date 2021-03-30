import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { UserService } from './user.service';

@Injectable()
export class authGuard implements CanActivate {
    constructor(private authService:UserService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
        // throw new Error("method not implementation");

        const isAuth =this.authService.getIsAuth();
        if(!isAuth){
            this.router.navigate(['./signup'])
        }
        return isAuth
    }
}
