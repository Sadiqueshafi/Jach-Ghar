import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GachgharformComponent } from './gachgharform/gachgharform.component';
import { GachgharlistComponent } from './gachgharlist/gachgharlist.component';
import { BloodComponent } from './blood/blood.component';
import { UrinComponent } from './urin/urin.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { UserComponent } from './user/user.component';
import { authGuard } from './shared/component/auth.guard';
import { BloodlistComponent } from './bloodlist/bloodlist.component';
import { ChangepasswordComponent } from '../app/changepassword/changepassword.component';


const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'',component:DefaultComponent,canActivate:[authGuard],children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'posts',component:PostsComponent},
  {path:'jachgharform',component:GachgharformComponent},
  {path:'jachgharlist',component:GachgharlistComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  // {path:'alldatafromserver',component:BloodlistComponent},
  {path:'listofalldata',component:BloodlistComponent}

]},

{path:'signup',component:UserComponent},
  // {path:'blooddata',component:BloodComponent},
  // {path:'urin',component:UrinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers:[authGuard]
})
export class AppRoutingModule { }
