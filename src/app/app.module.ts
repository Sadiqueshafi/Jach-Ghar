
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { GachgharformComponent } from './gachgharform/gachgharform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { GachgharlistComponent } from './gachgharlist/gachgharlist.component';
import { BloodComponent } from './blood/blood.component';
import { UrinComponent } from './urin/urin.component';
import {ClusterAndSensitivityComponent} from './cluster-and-sensitivity/cluster-and-sensitivity.component';
import { UrinlistComponent } from './urinlist/urinlist.component';
import { BloodlistComponent } from './bloodlist/bloodlist.component';
import {ChangepasswordComponent} from '../app/changepassword/changepassword.component'
import {SelectedYearService} from '../app/selected-year.service'
import {Globals} from '../app/global'
import 'hammerjs';
// import { MatCardModule } from '@angular/material';
// import { SharedComponent } from './shared/shared/shared.component';
// import { SharedModule } from './shared/component/shared.module';
import { DefaultModule } from './layout/default/default.module';
import { UserComponent } from './user/user.component';
import { authGuard } from './shared/component/auth.guard';
// import { AlertModule } from './shared/alert/alert.module';
import { ToastrModule } from 'ngx-toastr';
import {DialogElementsExampleDialog} from '../app/gachgharlist/gachgharlist.component'
// import { MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    GachgharformComponent,
    GachgharlistComponent,
    BloodComponent,
    UrinComponent,
    ClusterAndSensitivityComponent,
    UrinlistComponent,
    BloodlistComponent,
    ChangepasswordComponent,
    UserComponent,
    DialogElementsExampleDialog
    // authGuard

    // SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPrintModule,
    // MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    NgxSelectModule,
    HttpClientModule,
    // MatDialogModule,
    // MatDialogContent,
    // AlertModule,
    DefaultModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
    })
  ],
  providers: [Globals,SelectedYearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
