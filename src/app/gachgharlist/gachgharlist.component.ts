import { Component, ElementRef, OnInit, ViewChild,Inject,Input } from '@angular/core';
import { JachgharformService } from '../jachgharform.service';
import {JachgharForm} from '../gachgharform/jachgharInterface'
import{BloodGrouping}from '../../app/bloodlist/bloodgrouping';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-gachgharlist',
  templateUrl: './gachgharlist.component.html',
  styleUrls: ['./gachgharlist.component.css']
})
export class GachgharlistComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
 public hello=false;
  public a= [];
  public b= [];
  public arr = [];
  public urinarr =[]
  public billingNo=[];
  public s = new Array();
  public billing = new Array();
  people:BloodGrouping[];
  message:string;
  constructor(private jacgharservice:JachgharformService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.jacgharservice.getAllData('api/alldetails').subscribe(result=>{
      // console.log(result.jachGharAllData)
      // console.log(result.jachGharAllData[-1].length)
      // console.log(result.jachGharAllData[result.jachGharAllData.length-1])
      // console.log()
      var rendomNo = result.jachGharAllData[result.jachGharAllData.length-1].billingNo
      this.billingNo.push(rendomNo)
    })
    // var patitentDetail =JSON.parse(localStorage.getItem('JhachgharData'));
    // this.s.push(patitentDetail);
    // console.log(this.s);
    var obj = JSON.parse(localStorage.getItem('allData'));
    var anotherobj =Number(localStorage.getItem('billingno'))
    // console.log(obj.blood)
    this.s.push(obj)
    this.billing.push(anotherobj)
    // var urine = JSON.parse(localStorage.getItem('urinegrouping'));
    for (var key in obj.blood) {
      if (obj.blood[key] !== null && obj.blood[key] != ""){
           this.a.push(key+':-')
           this.arr.push(obj.blood[key])
           console.log(this.arr)
          //  console.log('hello'+this.a)
  }
}
for (var key in obj.urine) {
  if (obj.urine[key] !== null && obj.urine[key] != ""){
       this.b.push(key+':-')
       this.urinarr.push(obj.urine[key])
       this.hello = true
      //  console.log('hello'+this.b)
}
}

  }
  print(e){

    const printContents = document.getElementById(e).innerHTML;

  const WindowObject = window.open('','PrintWindow','width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
  );
  const htmlData = `<html><body>${printContents}</body></html>`;

  WindowObject.document.writeln(htmlData);
  WindowObject.document.close();
  WindowObject.focus();
  setTimeout(() => {
    WindowObject.close();
  }, 0.5);
  }
  myFunction() {
    var printButton = document.getElementById("printpagebutton");
    printButton.style.visibility = 'hidden';
    printButton.style.visibility = 'visible';

  }
public downloadPDF():void{

    }
    openDialog():void {

      const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',

})
export class DialogElementsExampleDialog {

   sendEmail() {
    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "sender@email_address.com",
    //   Password: "Enter your password",
    //   To: 'receiver@email_address.com',
    //   From: "sender@email_address.com",
    //   Subject: "Sending Email using javascript",
    //   Body: "Well that was easy!!",
    // })
    //   .then(function (message) {
    //     alert("mail sent successfully")
    //   });
  }


}
