import { Component, OnInit } from '@angular/core';
import { JachgharformService } from 'src/app/jachgharform.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public totalPatient :any;
    public useremail:any;
    public b :any;
    public bs :[]=[];
    public emailuser:any=[];
    public anotheremail:any[]=[]
    today: number = Date.now();
  constructor(private patientalldata:JachgharformService) { }

  ngOnInit(): void {
    this.patientalldata.getAllData('api/alldetails').subscribe(
      result=> {
        // console.log(result)
       const propOwn = Object.getOwnPropertyNames(result.jachGharAllData);
         this.totalPatient= propOwn.length
        for(var i=0;i<result.jachGharAllData.length; i++){
          var date = result.jachGharAllData[i];
          var backenddate= date.updatedAt;
          var timeStamp = Math.round(new Date().getTime() / 1000);
          var timeStampYesterday = timeStamp - (24 * 3600);
          var is24 = new Date(backenddate).getTime() >= new Date(timeStampYesterday*1000).getTime();
          if(is24==true){
            this.b = is24
              // console.log(this.b)
            this.bs =this.b;
              // console.log(this.bs)
          }
        }
      },
      (error) => {
        console.log(error)
      })

      this.patientalldata.getAllData('api/register').subscribe(result=>{
        const useremail = Object.getOwnPropertyNames(result.User);
        console.log(useremail)
        this.useremail =useremail.length
        for(var i=0;i<result.User.length; i++){
        this.emailuser.push(result.User[i])
          // console.log(this.emailuser)

        }

      }),
      (error) => {
        console.log(error)
      }

  }

}
