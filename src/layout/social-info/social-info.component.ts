import { Farmsize } from './farmsize.model';
import { SocialService } from './social.service';

import { Social } from './social-info.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
// import { DataStorageService } from './data-storage.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit, OnDestroy {
  page3Form: FormGroup;
  TotalRow: number;
  id: number;
  editMode = false;
  sub: Subscription;
 
 // socialInfo: Social;
  // subscription: Subscription;
   


  constructor(private socialService: SocialService , private route: ActivatedRoute , private router: Router, private _fb: FormBuilder ) {}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
       // console.log(this.id);
        this.editMode = params['id'] != null;
       // console.log(this.editMode);
        this.initForm();
      }
    );
}

onSubmit() {
  this.socialService.save(this.page3Form.value).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
gotoList() {
  this.router.navigate(['/social']);
}
save(form: any) {
  this.socialService.save(form).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}


  private initForm() {
   let aipf = 0;
   let fml = 0;
   let mle = 0;
   let totpop = 0;
   let fag = 0;
   let fos = 0;
   let lr = 0;
  let lm = 0;
   let lf = 0;
   let popMin = 0;
   let popMout = 0;
   let numhh = 0;
  let wihh = 0;
  let afs=0;
 
    
  // tslint:disable-next-line:prefer-const

        this.page3Form =
  new FormGroup({
    tableRows: this._fb.array([this.initTableRows()]),

    'id':  new FormControl(),
    'numberOfHousehold': new FormControl(numhh, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'male': new FormControl(mle, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'female': new FormControl(fml, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'totalPopulation': new FormControl(totpop, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'annualIncomePerFamily': new FormControl(aipf, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromAgriculture': new FormControl(fag, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromOtherSource': new FormControl(fos, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyRate': new FormControl(lr, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyMale': new FormControl(lm, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyFemale': new FormControl(lf, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'annualfoodSufficiency': new FormControl(afs, [Validators.required,]),

    'populationMigrationIn': new FormControl(popMin, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'populationMigrationOut': new FormControl(popMout, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'womenInHousehold': new FormControl(wihh, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),

  });
  if (this.editMode) {

    this.sub = this.socialService.get(this.id).subscribe((social: any) => {
      // const social = socials;
      console.log(social);


        if (social) {
          console.log(social.numhh);
        this.page3Form.patchValue({

        numberOfHousehold: social.numberOfHousehold,
        male : social.male,
        female : social.female,
        totalPopulation : social.totalPopulation,
        annualIncomePerFamily : social.annualIncomePerFamily,
        fromAgriculture : social.fromAgriculture,
        fromOtherSource : social.fromOtherSource,
        literacyRate : social.literacyRate,
        literacyMale : social.literacyMale,
        literacyFemale : social.literacyFemale,
        populationMigrationIn : social.populationMigrationIn,
        populationMigrationOut : social.populationMigrationOut,
        
        womenInHousehold : social.womenInHousehold});
         

      }



  });
}
}






initTableRows() {
  return this._fb.group({
    Select: [''],
    Number: [''],
    Percentage: [''],
  });
}

addNewRows() {
  const control = <FormArray>this.page3Form.controls['tableRows'];
  control.push(this.initTableRows());
}

deleteRows(index: number) {
const control = <FormArray>this.page3Form.controls['tableRows'];
if (control != null) {
  this.TotalRow = control.value.length;
}
if (this.TotalRow > 1) {
  control.removeAt(index);
} else {
  alert('One record is mandatory.');
  return false;
}
}
}
