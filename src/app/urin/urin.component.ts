import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BloodlistComponent } from '../bloodlist/bloodlist.component';
import { JachgharformService } from '../jachgharform.service';

import { UrinlistComponent } from '../urinlist/urinlist.component';
@Component({
  selector: 'app-urin',
  templateUrl: './urin.component.html',
  styleUrls: ['./urin.component.css']
})
export class UrinComponent implements OnInit {
  // public blood= true;
  public Urine= true;
  Quantits =['RBCs','WBC',];
  Specific =['RBCs','WBC'];
  Colours =['RED','Yellow','White'];
  Sediments =['Epithelium','good'];
  Transparency =['Epithelium','bad'];
  Reactions =['hello', 'world'];
  Albumin =['hello', 'world'];
  Suger = ['it helpful','or','not'];
  Acetone = ['hello','world'];
  BileSalt =['good','bad'];
  BilePigment = ['hello','world'];
  Urobilnogen=['genteral','answer'];
  TestedByUristicMethod=['hello','sadique'];
  public studentsList: string;
  constructor(private fb:FormBuilder,
    public dialog: MatDialog,
    private service :JachgharformService,

    ) { }
  // @Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<UrinComponent>
  urinegrouping = this.fb.group({
    quantity: ['',Validators.required],
    specific: ['', Validators.required],
    colour: ['', Validators.required],
    sediment: ['', Validators.required],
    transparency: ['', Validators.required],
    reaction: ['', Validators.required],
    albumin: ['', Validators.required],
    suger :['',Validators.required],
    acetone:['',Validators.required],
    bilesalt:['',Validators.required],
    bilepigment:['',Validators.required],
    urobilnogen:['',Validators.required],
    testedbyuristicmethod:['',Validators.required]
  });

  ngOnInit(): void { }

    onSubmit(){
      var data = this.urinegrouping.value
      if(this.urinegrouping.value !=""){
        localStorage.setItem('urinegrouping',JSON.stringify(this.urinegrouping.value));

      }
     localStorage.setItem('urinegrouping',JSON.stringify(this.urinegrouping.value));
      this.service.postData('api/urinedetail', data ).subscribe(
        result => {
          this.studentsList = result['data'];

        },
        (error) => {
          console.log(error);
        }
      )
    }

  quantitys(e){
   this.quantity.setValue(e.target.value,{
     onlySelf:false
   })
 }
 get quantity(){
   return this.urinegrouping.get('quantity')
 }
 specifics(e){
  this.specific.setValue(e.target.value,{
    onlySelf:false
  })
 }
 get specific(){
  return this.urinegrouping.get('specific')
}
colours(e){
  this.colour.setValue(e.target.value,{
    onlySelf:false
  })
}

get colour(){
  return this.urinegrouping.get('colour')
}
sediments(e){
  this.sediment.setValue(e.target.value,{
    onlySelf:false
  })
}
get sediment(){
  return this.urinegrouping.get('sediment')
}
transparencys(e){

  this.transparency.setValue(e.target.value,{
    onlySelf:false
  })
}
get transparency(){
  return this.urinegrouping.get('transparency');
}
reactions(e){
  this.reaction.setValue(e.target.value,{
    onlySelf:false
  })
}

get reaction(){
  return this.urinegrouping.get('reaction');
}
albumins(e){
  this.albumin.setValue(e.target.value,{
    onlySelf:false
  })
}
get albumin(){
  return this.urinegrouping.get('albumin');
}
sugers(e){
  this.suger.setValue(e.target.value,{
    onlySelf:false
  })
}
get suger(){
  return this.urinegrouping.get('suger');
}
acetones(e){
  this.acetone.setValue(e.target.value,{
    onlySelf:false
  })
}
get acetone(){
  return this.urinegrouping.get('acetone');
}
bilesalts(e){
  this.bilesalt.setValue(e.target.value,{
    onlySelf:false
  })
}
get bilesalt(){
  return this.urinegrouping.get('bilesalt');
}
bilepigments(e){
  this.bilepigment.setValue(e.target.value,{
    onlySelf:false
  })
}
get bilepigment(){
  return this.urinegrouping.get('bilepigment');
}
urobilnogens(e){
  this.urobilnogen.setValue(e.target.value,{
    onlySelf:false
  })
}
get urobilnogen(){
  return this.urinegrouping.get('urobilnogen');
}
testedbyuristicmethods(e){
  this.testedbyuristicmethod.setValue(e.target.value,{
    onlySelf:false
  })
}
  get testedbyuristicmethod(){
    return this.urinegrouping.get('testedbyuristicmethod');
  }
}
