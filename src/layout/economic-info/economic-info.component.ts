import { Economic } from './economic-info.model';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { EconomicService } from './economic.service';
// import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-economic-info',
  templateUrl: './economic-info.component.html',
  styleUrls: ['./economic-info.component.scss']
})
  export class EconomicInfoComponent implements OnInit, OnDestroy {
  page7Form: FormGroup;
  id: string;
  editMode = false;
  sub: Subscription;
   //  economicInfo: Economic;

 public rows: Array<{
  totalProjectCost: number,
  bcRatio1: number,
  costingYear: Date,
   discountRate1: number,
   eirr: number,
   bcRatio2: number,
   discountRate2: number,
   }> = [];

   buttonClicked() {
    // tslint:disable-next-line:prefer-const
    let totalProjectCost = this.page7Form.controls['totalProjectCost'].value;
    // tslint:disable-next-line:prefer-const
    let bcRatio1 = this.page7Form.controls['bcRatio1'].value;
    // tslint:disable-next-line:prefer-const
    let costingYear = this.page7Form.controls['costingYear'].value;
    // tslint:disable-next-line:prefer-const
    let discountRate1 = this.page7Form.controls['discountRate1'].value;
    // tslint:disable-next-line:prefer-const
    let eirr = this.page7Form.controls['eirr'].value;
    // tslint:disable-next-line:prefer-const
    let bcRatio2 = this.page7Form.controls['bcRatio2'].value;
    // tslint:disable-next-line:prefer-const
    let discountRate2 = this.page7Form.controls['discountRate2'].value;


   this.rows.push( {
     totalProjectCost: totalProjectCost,
    bcRatio1: bcRatio1,
    costingYear: costingYear,
    discountRate1: discountRate1,
    eirr: eirr,
    bcRatio2: bcRatio2,
    discountRate2: discountRate2,
     } );
  this.page7Form.reset(); }


  constructor(private route: ActivatedRoute , private economicService: EconomicService, private router: Router, ) { }
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
  this.economicService.save(this.page7Form.value).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
gotoList() {
  this.router.navigate(['/economic']);
}
private initForm() {

  // tslint:disable-next-line:prefer-const
  let TotalProjectCost = '';
  // tslint:disable-next-line:prefer-const
  let  BcRatio1 = '' ;
  // tslint:disable-next-line:prefer-const
  let CostingYear = '';
  // tslint:disable-next-line:prefer-const
  let DiscountRate1 = '';
  // tslint:disable-next-line:prefer-const
  let Eirr = '';
  // tslint:disable-next-line:prefer-const
  let BcRatio2 = '';
  // tslint:disable-next-line:prefer-const
  let DiscountRate2 = '';

  this.page7Form = new FormGroup({
    'id': new FormControl(),
    'totalProjectCost': new FormControl(TotalProjectCost, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'bcRatio1': new FormControl(BcRatio1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'costingYear': new FormControl(CostingYear, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'discountRate1': new FormControl(DiscountRate1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'eirr': new FormControl(Eirr, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'bcRatio2': new FormControl(BcRatio2, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'discountRate2': new FormControl(DiscountRate2, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),


  });

  if (this.editMode) {
    this.sub = this.economicService.get(this.id).subscribe((economic: any) => {
      // const economic = economics;
      console.log(economic);
      // if (economic) {
      //   console.log(economic.totalProjectCost);
        if (economic) {
        this.page7Form.patchValue({
          totalProjectCost: economic.totalProjectCost,
          bcRatio1 : economic.bcRatio1,
          costingYear : economic.costingYear,
          discountRate1 : economic.discountRate1,
          eirr : economic.eirr,
          bcRatio2 : economic.bcRatio2,
          discountRate2 : economic.discountRate2});
      }

    // } else {
    //   console.log(
    //     `Economic with id '${this.id}' not found `
    //   );


  });


  // onSubmit() {
  //   this.economicService.addEconomic(this.page7Form.value);
  // }

  // onAddInfo() {
  //   (<FormArray > this.page7Form.get('info')).push(
  //     new FormGroup({
  //       'name' : new FormControl()
  //     })
  //   );
  // }

  // onSaveData() {
  //   this.dataStorageService.storeEconomic().subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   );
  // }
  // ngOnInit() {
  //   this.page7Form = new FormGroup({
  //     'totalProjectCost': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'bcRatio1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'costingYear': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'discountRate1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'eirr': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'bcRatio2': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //     'discountRatio2': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  //   });
  // }
  }
}
  }
