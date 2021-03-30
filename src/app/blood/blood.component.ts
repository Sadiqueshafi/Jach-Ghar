import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BloodlistComponent } from '../bloodlist/bloodlist.component';
import { JachgharformService } from '../jachgharform.service';
import { BloodGrouping } from '../bloodlist/bloodgrouping';
@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class BloodComponent implements OnInit {
  // bloodlist = new BloodlistComponent();
  public blood= true;
  public Urine= true;
  Grouping = ['A+','A-','B+','B-','O+',"O-",'AB+','AB-'];
  Rhtype= ['RH Positive', 'RH Negative'];
  BloodForVDRLByStrip = ['RH Positive', 'RH Negative'];
  UrinePregnancyPregStrip = ['Positive','Negative'];
  // public Sex = [ 'Male','Female'];
  Hcv = ['goodrespnse','badresponse'];
  ASO = ['badres','good'];
  Normal =['nothingnormal','nonormal'];
  Ra =['as','it','is'];
  baseURL: string = "http://localhost:3000/";

  public studentsList: string;
  // bloodGrouping = new ();
  constructor(private fb:FormBuilder,
    public dialog: MatDialog,
    private service:JachgharformService
   ) { }
  // @Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<BloodComponent>
  bloodgrouping = this.fb.group({
    grouping: ['',Validators.required],
    rhtype: ['', Validators.required],
    vdrl: ['', Validators.required],
    urine: ['', Validators.required],
    hcv: ['', Validators.required],
    ra: ['', Validators.required],
    aso: ['', Validators.required],
    normalrange: ['', Validators.required],
    remark: ['', Validators.required],
    serum: ['', Validators.required],
  });

  ngOnInit(): void {

  }

  onSubmit(){
    var data =this.bloodgrouping.value;
    if(this.bloodgrouping.value !=""){
      localStorage.setItem('bloodgrouping',JSON.stringify(this.bloodgrouping.value));
      console.log('hy' +JSON.stringify(this.bloodgrouping.value));
    }
      localStorage.setItem('bloodgrouping',JSON.stringify(this.bloodgrouping.value));
      this.service.postData('api/blooddetail', data ).subscribe(
        result => {
          this.studentsList = result['data'];


        },
        (error) => {
          console.log(error)
        }
      )

      }
  changegrouping(e){
    console.log(e.value);
  this.grouping.setValue(e.target.value,{
      onlySelf:true
    })
  }

  get grouping(){
    return this.bloodgrouping.get('grouping');
  }

  rhtypes(f){
    this.rhtype.setValue(f.target.value,{
      onlySelf:true
    })
  }
 get rhtype(){
   return this.bloodgrouping.get('rhtype')
 }

 vdrls(e){
   this.vdrl.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get vdrl(){
   return this.bloodgrouping.get('vdrl')
 }
 urins(e){
   this.urine.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get urine(){
  return this.bloodgrouping.get('urine')
}
serums(e){
  this.serum.setValue(e.target.value,{
    onlySelf:true
  })
}
 get serum(){
   return this.bloodgrouping.get('serum')
 }
 hcvs(e){
  this.hcv.setValue(e.target.value,{
    onlySelf:true
  })
}
 get hcv(){
   return this.bloodgrouping.get('hcv')
 }
 ras(e){
  this.ra.setValue(e.target.value,{
    onlySelf:true
  })
}
 get ra(){
   return this.bloodgrouping.get('ra')
 }
 asos(e){
  this.aso.setValue(e.target.value,{
    onlySelf:true
  })
}
 get aso(){
   return this.bloodgrouping.get('aso')
 }
 normalranges(e){
  this.normalrange.setValue(e.target.value,{
    onlySelf:true
  })
}
 get normalrange(){
   return this.bloodgrouping.get('normalrange')
 }

}
