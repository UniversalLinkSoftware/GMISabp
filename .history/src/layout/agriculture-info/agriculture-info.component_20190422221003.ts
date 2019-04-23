
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AgricultureService } from './agriculture.service';
// import { ExistingAgriculture } from './agriculture-info.model';

@Component({
  selector: 'app-agriculture-info',
  templateUrl: './agriculture-info.component.html',
  styleUrls: ['./agriculture-info.component.scss']
})
export class AgricultureInfoComponent implements OnInit, OnDestroy {
  page4Form: FormGroup;
  id: string;
  editMode = false;
  sub: Subscription;
  // agricultureInfo: ExistingAgriculture;

  public rows: Array<{
     existingCropName: string,
    existingPlantingDate: string,
     existingPlantingWeek: string,
     existingCropArea: number,
     existingHarvestingDate: string,
     existingHarvestingWeek: string,
     existingAverageCropYield: number,
     existingAvgSeed: number,
     existingAvgDAP: number,
     existingAvgHumanLabour: number,
     existingAvgOrganicManure: number,
     existingAvgPotash: number,
     existingAvgAnimalLabour: number,
     existingAvgUrea: number,
     existingAvgMachineLabour: number,
     }> = [];
     public exicost: Array<{

      existingAvgSeed: number,
      existingAvgDAP: number,
      existingAvgHumanLabour: number,
      existingAvgOrganicManure: number,
      existingAvgPotash: number,
      existingAvgAnimalLabour: number,
      existingAvgUrea: number,
      existingAvgMachineLabour: number,
      }> = [];

      public proposed: Array<{
         proposedCropName: string,
         proposedPlantingDate: string,
         proposedPlantingWeek: string,
         proposedCropArea: number,
         proposedHarvestingDate: string,
         proposedHarvestingWeek: string,
         proposedAverageCropYield: number,
         proposedAvgSeed: string,
         proposedAvgDap: number,
         proposedAvgHumanLabour: number,
         proposedAvgOrganicManure: number,
         proposedAvgPotash: number,
         proposedAvgAnimalLabour: number,
         proposedAvgUrea: number,
         proposedAvgMachineLabour: number,
        }> = [];

        public proposedcost: Array<{

          proposedAvgSeed: number,
          proposedAvgDap: number,
          proposedAvgHumanLabour: number,
          proposedAvgOrganicManure: number,
          proposedAvgPotash: number,
          proposedAvgAnimalLabour: number,
          proposedAvgUrea: number,
          proposedAvgMachineLabour: number,
          }> = [];

     buttonClicked() {
      // tslint:disable-next-line:prefer-const
      let existingCropName = this.page4Form.controls['existingCropName'].value;
      // tslint:disable-next-line:prefer-const
      let existingPlantingDate = this.page4Form.controls['existingPlantingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingPlantingWeek = this.page4Form.controls['existingPlantingWeek'].value;
      // tslint:disable-next-line:prefer-const
      let existingCropArea = this.page4Form.controls['existingCropArea'].value;
      // tslint:disable-next-line:prefer-const
      let existingHarvestingDate = this.page4Form.controls['existingHarvestingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingHarvestingWeek = this.page4Form.controls['existingHarvestingWeek'].value;
      // tslint:disable-next-line:prefer-const
      let existingAverageCropYield = this.page4Form.controls['existingAverageCropYield'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgSeed = this.page4Form.controls['existingAvgSeed'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgDAP = this.page4Form.controls['existingAvgDAP'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgHumanLabour = this.page4Form.controls['existingAvgHumanLabour'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgOrganicManure = this.page4Form.controls['existingPlantingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgPotash = this.page4Form.controls['existingAvgPotash'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgAnimalLabour = this.page4Form.controls['existingAvgAnimalLabour'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgUrea = this.page4Form.controls['existingAvgUrea'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgMachineLabour = this.page4Form.controls['existingAvgMachineLabour'].value;


      this.rows.push( {
        existingCropName: existingCropName,
        existingPlantingDate: existingPlantingDate,
        existingPlantingWeek: existingPlantingWeek,
        existingCropArea: existingCropArea,
        existingHarvestingDate: existingHarvestingDate,
        existingHarvestingWeek: existingHarvestingWeek,
        existingAverageCropYield: existingAverageCropYield,
        existingAvgSeed: existingAvgSeed,
        existingAvgDAP: existingAvgDAP,
        existingAvgHumanLabour: existingAvgHumanLabour,
        existingAvgOrganicManure: existingAvgOrganicManure,
        existingAvgPotash: existingAvgPotash,
        existingAvgAnimalLabour: existingAvgAnimalLabour,
        existingAvgUrea: existingAvgUrea,
        existingAvgMachineLabour: existingAvgMachineLabour,
         } );

      this.page4Form.reset(); }

      costClicked() {

        const existingAvgSeed = this.page4Form.controls['existingAvgSeed'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgDAP = this.page4Form.controls['existingAvgDAP'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgHumanLabour = this.page4Form.controls['existingAvgHumanLabour'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgOrganicManure = this.page4Form.controls['existingPlantingDate'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgPotash = this.page4Form.controls['existingAvgPotash'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgAnimalLabour = this.page4Form.controls['existingAvgAnimalLabour'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgUrea = this.page4Form.controls['existingAvgUrea'].value;
        // tslint:disable-next-line:prefer-const
        let existingAvgMachineLabour = this.page4Form.controls['existingAvgMachineLabour'].value;
        this.exicost.push( {

          existingAvgSeed: existingAvgSeed,
          existingAvgDAP: existingAvgDAP,
          existingAvgHumanLabour: existingAvgHumanLabour,
          existingAvgOrganicManure: existingAvgOrganicManure,
          existingAvgPotash: existingAvgPotash,
          existingAvgAnimalLabour: existingAvgAnimalLabour,
          existingAvgUrea: existingAvgUrea,
          existingAvgMachineLabour: existingAvgMachineLabour,
           } );
           this.page4Form.reset(); }

           proposedClicked() {
            // tslint:disable-next-line:prefer-const
            let proposedCropName = this.page4Form.controls['proposedCropName'].value;
            // tslint:disable-next-line:prefer-const
            let proposedPlantingDate = this.page4Form.controls['proposedPlantingDate'].value;
            // tslint:disable-next-line:prefer-const
            let proposedPlantingWeek = this.page4Form.controls['proposedPlantingWeek'].value;
            // tslint:disable-next-line:prefer-const
            let proposedCropArea = this.page4Form.controls['proposedCropArea'].value;
            // tslint:disable-next-line:prefer-const
            let proposedHarvestingDate = this.page4Form.controls['proposedHarvestingDate'].value;
            // tslint:disable-next-line:prefer-const
            let proposedHarvestingWeek = this.page4Form.controls['proposedHarvestingWeek'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAverageCropYield = this.page4Form.controls['proposedAverageCropYield'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgSeed = this.page4Form.controls['proposedAvgSeed'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgDap = this.page4Form.controls['proposedAvgDap'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgHumanLabour = this.page4Form.controls['proposedAvgHumanLabour'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgOrganicManure = this.page4Form.controls['proposedAvgOrganicManure'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgPotash = this.page4Form.controls['proposedAvgPotash'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgAnimalLabour = this.page4Form.controls['proposedAvgAnimalLabour'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgUrea = this.page4Form.controls['proposedAvgUrea'].value;
            // tslint:disable-next-line:prefer-const
            let proposedAvgMachineLabour = this.page4Form.controls['proposedAvgMachineLabour'].value;


            this.proposed.push( {
              proposedCropName: proposedCropName,
              proposedPlantingDate: proposedPlantingDate,
              proposedPlantingWeek: proposedPlantingWeek,
              proposedCropArea: proposedCropArea,
              proposedHarvestingDate: proposedHarvestingDate,
              proposedHarvestingWeek: proposedHarvestingWeek,
              proposedAverageCropYield: proposedAverageCropYield,
              proposedAvgSeed: proposedAvgSeed,
              proposedAvgDap: proposedAvgDap,
              proposedAvgHumanLabour: proposedAvgHumanLabour,
              proposedAvgOrganicManure: proposedAvgOrganicManure,
              proposedAvgPotash: proposedAvgPotash,
              proposedAvgAnimalLabour: proposedAvgAnimalLabour,
              proposedAvgUrea: proposedAvgUrea,
              proposedAvgMachineLabour: proposedAvgMachineLabour,
               } );

            this.page4Form.reset(); }

            propcostClicked() {

              // tslint:disable-next-line:prefer-const
              let proposedAvgSeed = this.page4Form.controls['proposedAvgSeed'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgDap = this.page4Form.controls['proposedAvgDap'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgHumanLabour = this.page4Form.controls['proposedAvgHumanLabour'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgOrganicManure = this.page4Form.controls['proposedAvgOrganicManure'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgPotash = this.page4Form.controls['proposedAvgPotash'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgAnimalLabour = this.page4Form.controls['proposedAvgAnimalLabour'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgUrea = this.page4Form.controls['proposedAvgUrea'].value;
              // tslint:disable-next-line:prefer-const
              let proposedAvgMachineLabour = this.page4Form.controls['proposedAvgMachineLabour'].value;
              this.proposedcost.push( {

                proposedAvgSeed: proposedAvgSeed,
                proposedAvgDap: proposedAvgDap,
                proposedAvgHumanLabour: proposedAvgHumanLabour,
                proposedAvgOrganicManure: proposedAvgOrganicManure,
                proposedAvgPotash: proposedAvgPotash,
                proposedAvgAnimalLabour: proposedAvgAnimalLabour,
                proposedAvgUrea: proposedAvgUrea,
                proposedAvgMachineLabour: proposedAvgMachineLabour,
                 } );
                 this.page4Form.reset(); }

  // tslint:disable-next-line:member-ordering
  constructor(private route: ActivatedRoute , private agricultureService: AgricultureService, private router: Router, ) { }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
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
  this.agricultureService.save(this.page4Form.value).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
gotoList() {
  this.router.navigate(['/agriculture']);
}
  private initForm() {

       // tslint:disable-next-line:prefer-const
       let CropName = '';
       // tslint:disable-next-line:prefer-const
       let  PlantingDate = '' ;
       // tslint:disable-next-line:prefer-const
       let PlantingWeek = '';
       // tslint:disable-next-line:prefer-const
       let CropArea = 0;
       // tslint:disable-next-line:prefer-const
       let HarvestingDate = '';
       // tslint:disable-next-line:prefer-const
       let HarvestingWeek = 0;
       // tslint:disable-next-line:prefer-const
       let AverageCropYield = 0;
       // tslint:disable-next-line:prefer-const
       let AvgSeed = 0;
       // tslint:disable-next-line:prefer-const
       let AvgDAP = 0;
       // tslint:disable-next-line:prefer-const
       let AvgHumanLabour = 0;
       // tslint:disable-next-line:prefer-const
       let AvgOrganicManure = 0;
       // tslint:disable-next-line:prefer-const
       let AvgPotash = 0;
       // tslint:disable-next-line:prefer-const
       let AvgAnimalLabour = 0;
       // tslint:disable-next-line:prefer-const
       let AvgUrea = 0;
       // tslint:disable-next-line:prefer-const
       let AvgMachineLabour = 0;



    this.page4Form = new FormGroup({
      'existingCropName': new FormControl(CropName, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingPlantingDate': new FormControl(PlantingDate, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingPlantingWeek': new FormControl(PlantingWeek, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingCropArea': new FormControl(CropArea, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingHarvestingDate': new FormControl(HarvestingDate, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingHarvestingWeek': new FormControl(HarvestingWeek, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAverageCropYield': new FormControl(AverageCropYield, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgSeed': new FormControl(AvgSeed, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgDAP': new FormControl(AvgDAP, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgHumanLabour': new FormControl(AvgHumanLabour, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgOrganicManure': new FormControl(AvgOrganicManure, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgPotash': new FormControl(AvgPotash, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgAnimalLabour': new FormControl(AvgAnimalLabour, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgUrea': new FormControl(AvgUrea, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgMachineLabour': new FormControl(AvgMachineLabour, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedCropName': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedPlantingDate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedPlantingWeek': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedCropArea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedHarvestingDate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedHarvestingWeek': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAverageCropYield': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgSeed': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgDap': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgHumanLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgOrganicManure': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgPotash': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgAnimalLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgUrea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgMachineLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'NeareastAgricultureExtensionOffice': new FormControl(null, [Validators.required]),
      'extensionOfficeDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'neareastAgrovetOffice': new FormControl(null, [Validators.required]),
      'agrovetOfficeDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    if (this.editMode) {
      this.sub = this.agricultureService.get(this.id).subscribe((agricultures: any) => {
        const agriculture = agricultures;
        console.log(agriculture);
        if (agriculture) {
          console.log(agriculture.cropName);
          if (agriculture.existing) {
          this.page4Form.patchValue({
          existingCropName: agriculture.cropName,
          existingPlantingDate : agriculture.plantingDate,
          existingPlantingWeek : agriculture.plantingWeek,
          existingCropArea : agriculture.cropArea,
          existingHarvestingDate : agriculture.harvestingDate,
          existingHarvestingWeek : agriculture.harvestingWeek,
          existingAverageCropYield : agriculture.averageCropYield,
          existingAvgSeed : agriculture.avgSeed,
          existingAvgDAP : agriculture.avgDAP,
          existingAvgHumanLabour : agriculture.avgHumanLabour,
          existingAvgOrganicManure : agriculture.avgOrganicManure,
          existingAvgPotash : agriculture.avgPotash,
          existingAvgAnimalLabour : agriculture.avgAnimalLabour,
          existingAvgUrea : agriculture.avgUrea,
          existingAvgMachineLabour : agriculture.avgMachineLabour});
        }

      } else {
        console.log(
          `Agriculture with id '${this.id}' not found `
        );

      }
    });
  }
  }


  }
