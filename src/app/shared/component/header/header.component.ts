import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import {SelectedYearService} from '../../../selected-year.service'
import { Globals } from 'src/app/global';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() togglesidebarForme: EventEmitter<any> = new EventEmitter;

public year;
  constructor(private authService:UserService,private selectedYearService: SelectedYearService,public globals:Globals) { }

  ngOnInit(): void {
    // this.globals.roles = Object.keys(this.rolesJson)
    this.selectedYearService.selectedYear.subscribe(message => {
      if (message !== this.year) {
        this.year = message;
      }
    })
  }
  toggleSidebar(){
this.togglesidebarForme.emit();
  }
  onLogOut(){
    this.authService.LogOut();
}
getYear(year) {
  this.selectedYearService.changeMyVar(year);
}
 async getSettings() {
    // await this.apiService.getData('setting', { 'status': 'Active' }).subscribe(
      // (result) => {
        // this.globals.settings = result['data']
        // this.globals.selectedYear         // localStorage.setItem('selectedYear', this.globals.selectedYear)
        // this.schoolName = result['data']['schoolShortName']
      // }
    // )
    // = result['data']['currentAccademicYear']

  }

}
