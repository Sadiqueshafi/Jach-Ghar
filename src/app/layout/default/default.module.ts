import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../module/dashboard/dashboard.component';
import { DefaultComponent } from '../../layout/default/default.component';
import { PostsComponent } from '../../module/posts/posts.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/component/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { authGuard } from 'src/app/shared/component/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    PostsComponent,
    // authGuard
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class DefaultModule { }
