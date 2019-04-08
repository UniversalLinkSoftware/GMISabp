// import { MainTable } from './../../../../../GMIS DEV/src/app/layout/engineering-info/maintable.model';
import { EngineeringService } from './engineering.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RiverHydology } from './engineering-info.model';
import { Response } from '@angular/http';
// import { DataStorageService } from '../social-info/data-storage.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-engineering-info',
  templateUrl: './engineering-info.component.html',
  styleUrls: ['./engineering-info.component.scss']
})

export class EngineeringInfoComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;

  myGroup: FormGroup;
  TotalRow: number;
  engineeringInfo: RiverHydology;
  // subscription: Subscription;
  id: string;
  editMode = false;
  sub: Subscription;
  modalRef: BsModalRef;
    ca = 0;
    lsrahw = 0;
    fd25 = 0;
    fd50 = 0;
    fd100 = 0;
    mofc = 0;
    norc = 0;
    rwahs = 0;
    aarf = 0;
    hr = 0;
    rb = 0;
    mcd = 0;
    mtl = 0;
    mltcl = 0;
    mdd = 0;
    mtw = 0;
    mss = 0;
    mnobc = 0;
    mbw = 0;
    mls = 0;
    mbcl = 0;
    mutcl = 0;
    mtd = 0;
    bnobc = 0;
    gca = 0;
    cca = 0;
    btl = 0;
    bltcl = 0;
    butcl = 0;
    bdd = 0;
    bttr = 0;
    bsbl = 0;
    bcs = 0;

  public rows: Array<{
     bNameOfBranchCanal: string, bgca: number, bcca: number
      bTotallength: number,
      bLinedTypeCanalLength: number,
      bUnlinedTypeCanalLength: number,
      bDesignDischarge: number,
      btertiary: string,
      bSubBranchLength: string,
      bCanalStructure: string, }> = [];



  // fieldArray: Array<any> = [];
  // newAttribute: any = {};


  // addFieldValue() {
  //     this.fieldArray.push(this.newAttribute);
  //     this.newAttribute = {};
  // }

  // deleteFieldValue(index) {
  //     this.fieldArray.splice(index, 1);
  // }
  buttonClicked() {
    // tslint:disable-next-line:prefer-const
    let bNameOfBranchCanal = this.myGroup.controls['bNameOfBranchCanal'].value;
    // tslint:disable-next-line:prefer-const
    let bgca = this.myGroup.controls['bgca'].value;
    // tslint:disable-next-line:prefer-const
    let bcca = this.myGroup.controls['bcca'].value;
    // tslint:disable-next-line:prefer-const
    let bTotallength = this.myGroup.controls['bTotallength'].value;
    // tslint:disable-next-line:prefer-const
    let bLinedTypeCanalLength = this.myGroup.controls['bLinedTypeCanalLength'].value;
    // tslint:disable-next-line:prefer-const
    let bUnlinedTypeCanalLength = this.myGroup.controls['bUnlinedTypeCanalLength'].value;
    // tslint:disable-next-line:prefer-const
    let bDesignDischarge = this.myGroup.controls['bDesignDischarge'].value;
    // tslint:disable-next-line:prefer-const
    let btertiary = this.myGroup.controls['btertiary'].value;
    // tslint:disable-next-line:prefer-const
    let bSubBranchLength = this.myGroup.controls['bSubBranchLength'].value;
    // tslint:disable-next-line:prefer-const
    let bCanalStructure = this.myGroup.controls['bCanalStructure'].value;

   this.rows.push( {bNameOfBranchCanal: bNameOfBranchCanal, bgca: bgca, bcca: bcca, bTotallength: bTotallength,
    bLinedTypeCanalLength: bLinedTypeCanalLength,
    bUnlinedTypeCanalLength: bUnlinedTypeCanalLength,
    bDesignDischarge: bDesignDischarge,
    btertiary: btertiary,
    bSubBranchLength: bSubBranchLength,
    bCanalStructure: bCanalStructure, } );
  this.myGroup.reset(); }

  constructor(private modalService: BsModalService, private engineeringService: EngineeringService, private _fb: FormBuilder ) {}
  riverHydrology() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  mainCanal() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  branchCanal() {
    this.isCollapsed3 = !this.isCollapsed3;
  }
  secondaryCanal() {
    this.isCollapsed3 = !this.isCollapsed3;
  }
  // onSubmit() {
  //     this.engineeringService.addEngineering(this.myGroup.value);
  //   }
      // onSaveData() {
      //   this.dataStorageService.storeEngineering().subscribe(
      //     (response: Response) => {
      //       console.log(response);
      //     }
      //   );
      // }

      // onFetch() {
      //   console.log(this.dataStorageService.getEngineering());
      // }
    //   onEditData() {
    // const engineeringInfo = this.engineeringService.getEngineeringInfo();
    // this.myGroup.setValue(engineeringInfo);
    //   }

  ngOnInit() {

    this.myGroup = new FormGroup({
      tableRows: this._fb.array([this.initTableRows()]),
      // firstName: new FormControl(),
      'id':  new FormControl(),
      'catchmentArea': new FormControl(this.ca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/ )]),
      'lngSlopeOfRiverAtHeadworksSite': new FormControl(this.lsrahw, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge25': new FormControl(this.fd25, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge50': new FormControl(this.fd50, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge100': new FormControl(this.fd100, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'methodOfFloodCalculation': new FormControl(this.mofc, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nameOfRiverSource': new FormControl(this.norc, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'riverWidthAtHeadworksSite': new FormControl(this.rwahs, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'averageAnnualRiverfall': new FormControl(this.aarf, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'hydrologicalRegion': new FormControl(this.hr, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'riverBasin': new FormControl(this.rb, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),

      'mCanalDirection': new FormControl(this.mcd, [Validators.required]),
      'mTotalLength': new FormControl(this.mtl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mLinedTypeCanalLength': new FormControl(this.mltcl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mDesignDischarge': new FormControl(this.mdd, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mTopWidth': new FormControl(this.mtw, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mSlideSlope': new FormControl(this.mss, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mNumberOfBranchCanal': new FormControl(this.mnobc, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mBottomWidth': new FormControl(this.mbw, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mLongitudinalSlope': new FormControl(this.mls, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mBranchCanalLength': new FormControl(this.mbcl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mUnlinedTypeCanalLength': new FormControl(this.mutcl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mTotalDepth': new FormControl(this.mtd, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),

      'bNameOfBranchCanal': new FormControl(this.bnobc, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bgca': new FormControl(this.gca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bcca': new FormControl(this.cca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bTotallength': new FormControl(this.btl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bLinedTypeCanalLength': new FormControl(this.bltcl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bUnlinedTypeCanalLength': new FormControl(this.butcl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bDesignDischarge': new FormControl(this.bdd, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'btertiary': new FormControl(this.bttr, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bSubBranchLength': new FormControl(this.bsbl, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bCanalStructure': new FormControl(this.bcs, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
   });
   if (this.editMode) {
    this.sub = this.engineeringService.get(this.id).subscribe((riverHydrology: any) => {


      console.log(riverHydrology);
        if (riverHydrology) {
          console.log(riverHydrology.catchmentArea);
        this.myGroup.patchValue({
          catchmentArea: riverHydrology.catchmentArea,
        });
      }


  });
}
}
  initTableRows() {
    return this._fb.group({
      Select: [''],
      Name: [''],
    });
  }

  addNewRows() {
    const control = <FormArray>this.myGroup.controls['tableRows'];
    control.push(this.initTableRows());
}

deleteRows(index: number) {
  const control = <FormArray>this.myGroup.controls['tableRows'];
  if (control != null) {
    this.TotalRow = control.value.length;
  }
  if (this.TotalRow > 1) {
    control.removeAt(index);
  } else {
    alert('one record is mandatory.');
    return false;
  }
}
openModal() {
  this.modalRef = this.modalService.show(MapComponent);
}
}
