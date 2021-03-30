import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
// import {  } from '@angular/forms';
import {JachgharformService}from '../jachgharform.service'
import { MatDialog } from '@angular/material/dialog';
import {BloodComponent} from '../blood/blood.component';
import {UrinComponent} from '../urin/urin.component'
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gachgharform',
  templateUrl: './gachgharform.component.html',
  styleUrls: ['./gachgharform.component.css'],
  animations:[]
})
export class GachgharformComponent implements OnInit {
  public Urine= true;
  hidebutton = false;
  local =[]
  public Sex = [ 'Male','Female'];
  JachGhar: FormGroup;
  submitted = false;
  public studentsList: string;
  options = {
    autoClose: false,
    keepAfterRouteChange: false
};

  constructor(private fb:FormBuilder,
    private jacgharservice:JachgharformService,
    public dialog: MatDialog,
    private router: Router) { }


  ngOnInit(): void {
    this.JachGhar = this.fb.group({
      date: ['', Validators.required],
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', [Validators.required]],
      dr: ['', Validators.required],
    });

  }
  get registerFormControl() {
    return this.JachGhar.controls;
  }


 changeSex(e){
  console.log(e.value);
  this.sex.setValue(e.target.value,{
    onlySelf:true
  })
}

get sex(){
  return this.JachGhar.get('sex');
}

  onSubmit(){

      var minm = 10000;
      var maxm = 99999;
      var billingno = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

    var data = [this.JachGhar.value + billingno] ;
    localStorage.setItem('JhachgharData',JSON.stringify(this.JachGhar.value+billingno));
    this.jacgharservice.postData('api/patientdetail', data ).subscribe(
      result => {
        this.studentsList = result['data'];

        // this.toaster.showSuccess( ")
        // this.JachGhar.reset()
        this.hidebutton= true;
        this.submitted =false
      },
      (error) => {
        console.log(error)
      }
    )
    // this.jacgharservice.postData("http://localhost:8080/gachgharform/",this.JachGhar.value).subscribe(res=>{
    //   console.log("data successfully added")
    // })
    // console.log(JSON.stringify(this.JachGhar.value));
  }
  openBlood(): void {
    const dialogRef = this.dialog.open(BloodComponent, {
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openUrine(): void {
    const dialogRef = this.dialog.open(UrinComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  good(){
    var jach = JSON.parse(localStorage.getItem('JhachgharData'));
    var obj = JSON.parse(localStorage.getItem('bloodgrouping'));
    var urine = JSON.parse(localStorage.getItem('urinegrouping'));
    this.local.push(jach);
    this.local.push(obj);
    this.local.push(urine);
  }

  finalSubmit(){
    this.good()
    this.router.navigate(['/jachgharlist']);

  }
}
