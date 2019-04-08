import { Implementation } from './implementation-info.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImplementationService } from './implementation.service';

import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-implementation-info',
  templateUrl: './implementation-info.component.html',
  styleUrls: ['./implementation-info.component.scss']
})
export class ImplementationInfoComponent implements OnInit, OnDestroy {


  page8Form: FormGroup;
  id: string;
  editMode = false;
  sub: Subscription;
  // implementationInfo:Implementation;
  subscription: Subscription;
  gshare=0;
  wsahre=0;
  phyp= 0;
  phypdate=0;
  finp=0;
  finpdate=0;
  wuado=0;
  wuard=0;
  tn=0;
  td=0;
  tp=0;
  nop=0;
  public rows: Array<{trainingName: string, trainingDate: number, trainingPeriod: number
    numberOfParticipants: number, }> = [];
    buttonClicked() {
      let trainingName= this.page8Form.controls['trainingName'].value;
      let trainingDate = this.page8Form.controls['trainingDate'].value;
      let trainingPeriod = this.page8Form.controls['trainingPeriod'].value;
      const numberOfParticipants = this.page8Form.controls['numberOfParticipants'].value;
// tslint:disable-next-line:max-line-length
      this.rows.push( {trainingName: trainingName, trainingDate: trainingDate, trainingPeriod: trainingPeriod, numberOfParticipants: numberOfParticipants,
        } );
        this.page8Form.reset(); }
// tslint:disable-next-line:max-line-length
  constructor(private implementationService: ImplementationService, private route: ActivatedRoute , private router: Router, private _fb: FormBuilder) {}
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
  this.implementationService.save(this.page8Form.value).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
gotoList() {
  this.router.navigate(['/implementation']);
}
  private initForm() {
   let gshare = 0;
   let wsahre = 0;
   let phyp = 0;
   let phypdate = 0;
   let finp = 0;
   let finpdate = 0;
   let wuado = 0;
  let wuard = 0;
   let tn = 0;
   let td = 0;
   let tp = 0;
   let nop = 0;
  

    this.page8Form =
    new FormGroup({
      'id':  new FormControl(),
      'gonShare': new FormControl(gshare, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'wuaShare': new FormControl(wsahre, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'physicalProgress': new FormControl(phyp, [Validators.required, ]),
      'physicalProgressDate': new FormControl(phypdate, [Validators.required, ]),
      'finiancialProgress': new FormControl(finp, [Validators.required, ]),
      'finiancialProgressDate': new FormControl(finpdate, [Validators.required, ]),
      'wuaDevelopmentOffice': new FormControl(wuado, [Validators.required, ]),
      'wuaRegistrarionDate': new FormControl(wuard, [Validators.required, ]),
      'trainingName': new FormControl(tn, [Validators.required, ]),
      'trainingDate': new FormControl(td, [Validators.required, ]),
      'trainingPeriod': new FormControl(tp, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'numberOfParticipants': new FormControl(nop, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

    }
    );
    if (this.editMode) {
      this.sub = this.implementationService.get(this.id).subscribe((implementation: any) => {


        console.log(implementation);
          if (implementation) {
            console.log(implementation.gonShare);
          this.page8Form.patchValue({
            
            gonShare: implementation.gonShare,
            wuaShare : implementation.wuaShare,
            physicalProgress : implementation.physicalProgress,
            physicalProgressDate : implementation.physicalProgressDate,
            finiancialProgress : implementation.finiancialProgress,
            finiancialProgressDate : implementation.finiancialProgressDate,
            wuaDevelopmentOffice : implementation.wuaDevelopmentOffice,
            wuaRegistrarionDate : implementation.wuaRegistrarionDate,
            trainingName : implementation.trainingName,
            trainingDate : implementation.trainingDate,
            trainingPeriod : implementation.trainingPeriod,
            numberOfParticipants : implementation.numberOfParticipants,
          });
        }


    });
  }
  }}
