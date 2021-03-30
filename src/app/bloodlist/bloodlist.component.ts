import { Component, OnInit,Inject,Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JachgharformService } from '../jachgharform.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-bloodlist',
  templateUrl: './bloodlist.component.html',
  styleUrls: ['./bloodlist.component.css']
})
export class BloodlistComponent implements OnInit {
  JachGhar: FormGroup;
  public finalObjet ={}
  public Sex = [ 'Male','Female'];
  Grouping = ['A+','A-','B+','B-','O+',"O-",'AB+','AB-'];
  Rhtype= ['RH Positive', 'RH Negative'];
  BloodForVDRLByStrip = ['Negative',"HIV/AIDS","Lyme disease","Certain types of pneumonia","Malaria","Systemic lupus erythematosus"];
  UrinePregnancyPregStrip = ['Pregnancy test strips','Clear view',"Pregcolor card","Pregtest card","Veklocit","Digital pregnancy strip"];
  Hcv = ['non-reactive','reactive'];
  ASO = ['negative','ASO antibodies'];
  Normal =['nothingnormal','nonormal'];
  Ra =['as','it','is'];
  Quantits =['RBCs','WBC',];
  Specific =['RBCs','WBC'];
  Colours =['RED','blue','White'];
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
   good=[];
   patientdetail=[];
   bloodddata=[];
   urinedetail=[];
   public studentsList: string;
  public billNo:any;
  constructor(private service:JachgharformService,private fb:FormBuilder,private toster: ToastrService,private router:Router) {}

  ngOnInit(): void {
    // var as = this.ref()
    this.JachGhar = this.fb.group({
      // ref: as,
      date: ['', Validators.required],
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', [Validators.required]],
      dr: ['', Validators.required],
      blood: this.fb.group({
        grouping: ['',Validators.required],
        rhtype: ['', Validators.required],
        vdrl: ['', Validators.required],
        urine: ['', Validators.required],
        hcv: ['', Validators.required],
        ra: ['', Validators.required],
        aso: ['', Validators.required],
        normalrange: ['', Validators.required],
        remark: ['', Validators.required],
        serum: ['', Validators.required]
      }),
      urine: this.fb.group({
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
        testedbyuristicmethod:['',Validators.required],
    }),
  }),
  console.log(this.good);
}

  // ref(){
  //   // this.JachGhar.get('ref')
  //   var minm = 10000;
  //   var maxm = 99999;
  //   this.billNo = (document.getElementById('ref') as HTMLTextAreaElement).value
  //    this.billNo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  //    console.log(this.billNo)
  // }


  onSubmit() {
    // var arr=[];
    // var minm = 10000;
    // var maxm = 99999;
    // var billingno =  Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var data =JSON.stringify( this.JachGhar.value);
    // Object.assign(this.finalObjet, this.JachGhar.value);

    localStorage.setItem('allData',data);
    // localStorage.setItem('billingno',billingno.toString());
    console.log(data)
    // var a =JSON.stringify({"billingNo":billingno})
    // Object.assign(this.finalObjet,a)
    // console.log(a)
    // console.log(this.finalObjet)

    this.service.postData('api/alldetails',  this.JachGhar.value).subscribe(
      result => {
        this.studentsList = result['data'];
        this.toster.success('Your Data Added Successfully!!')
        this.router.navigate(['/jachgharlist']);
      },
      (error) => {
        console.log(error)
      }
    )
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

  changegrouping(e){
    console.log(e.value);
  this.grouping.setValue(e.target.value,{
      onlySelf:true
    })
  }

  get grouping(){
    return this.JachGhar.get('blood.grouping');
  }

  rhtypes(f){
    this.rhtype.setValue(f.target.value,{
      onlySelf:true
    })
  }
 get rhtype(){
   return this.JachGhar.get('blood.rhtype')
 }

 vdrls(e){
   this.vdrl.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get vdrl(){
   return this.JachGhar.get('blood.vdrl')
 }
 urins(e){
   this.urine.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get urine(){
  return this.JachGhar.get('blood.urine')
}
serums(e){
  this.serum.setValue(e.target.value,{
    onlySelf:true
  })
}
 get serum(){
   return this.JachGhar.get('blood.serum')
 }
 hcvs(e){
  this.hcv.setValue(e.target.value,{
    onlySelf:true
  })
}
 get hcv(){
   return this.JachGhar.get('blood.hcv')
 }
 ras(e){
  this.ra.setValue(e.target.value,{
    onlySelf:true
  })
}
 get ra(){
   return this.JachGhar.get('blood.ra')
 }
 asos(e){
  this.aso.setValue(e.target.value,{
    onlySelf:true
  })
}
 get aso(){
   return this.JachGhar.get('blood.aso')
 }
 normalranges(e){
  this.normalrange.setValue(e.target.value,{
    onlySelf:true
  })
}
 get normalrange(){
   return this.JachGhar.get('blood.normalrange')
 }
 quantitys(e){
  this.quantity.setValue(e.target.value,{
    onlySelf:false
  })
}
get quantity(){
  return this.JachGhar.get('urine.quantity')
}
specifics(e){
 this.specific.setValue(e.target.value,{
   onlySelf:false
 })
}
get specific(){
 return this.JachGhar.get('urine.specific')
}

colours(e){
 this.colour.setValue(e.target.value,{
   onlySelf:false
 })
}

get colour(){
 return this.JachGhar.get('urine.colour')
}
sediments(e){
 this.sediment.setValue(e.target.value,{
   onlySelf:false
 })
}
get sediment(){
 return this.JachGhar.get('urine.sediment')
}
transparencys(e){

 this.transparency.setValue(e.target.value,{
   onlySelf:false
 })
}
get transparency(){
 return this.JachGhar.get('urine.transparency');
}

reactions(e){
 this.reaction.setValue(e.target.value,{
   onlySelf:false
 })
}

get reaction(){
 return this.JachGhar.get('urine.reaction');
}
albumins(e){
 this.albumin.setValue(e.target.value,{
   onlySelf:false
 })
}
get albumin(){
 return this.JachGhar.get('urine.albumin');
}
sugers(e){
 this.suger.setValue(e.target.value,{
   onlySelf:false
 })
}
get suger(){
 return this.JachGhar.get('urine.suger');
}
acetones(e){
 this.acetone.setValue(e.target.value,{
   onlySelf:false
 })
}
get acetone(){
 return this.JachGhar.get('urine.acetone');
}
bilesalts(e){
 this.bilesalt.setValue(e.target.value,{
   onlySelf:false
 })
}
get bilesalt(){
 return this.JachGhar.get('urine.bilesalt');
}
bilepigments(e){
 this.bilepigment.setValue(e.target.value,{
   onlySelf:false
 })
}
get bilepigment(){
 return this.JachGhar.get('urine.bilepigment');
}
urobilnogens(e){
 this.urobilnogen.setValue(e.target.value,{
   onlySelf:false
 })
}
get urobilnogen(){
 return this.JachGhar.get('urine.urobilnogen');
}
testedbyuristicmethods(e){
 this.testedbyuristicmethod.setValue(e.target.value,{
   onlySelf:false
 })
}
 get testedbyuristicmethod(){
   return this.JachGhar.get('urine.testedbyuristicmethod');
 }
}
