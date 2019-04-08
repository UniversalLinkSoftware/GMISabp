import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroundwaterService } from './groundwater.service';
import { Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Groundwater } from './groundwater-info.model';

@Component({
  selector: 'app-groundwater-info',
  templateUrl: './groundwater-info.component.html',
  styleUrls: ['./groundwater-info.component.scss']
})
export class GroundwaterInfoComponent implements OnInit, OnDestroy {

  page6Form: FormGroup;
  id: number;
  editMode = false;
  sub: Subscription;
  groundwaterInfo: Groundwater;
  constructor(private route: ActivatedRoute, private groundwaterService: GroundwaterService, private router: Router, ) {}
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
  this.groundwaterService.save(this.page6Form.value).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
gotoList() {
  this.router.navigate(['/groundwater']);
}
save(form: any) {
  this.groundwaterService.save(form).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}
remove(id: number) {
  console.log(id);
  this.groundwaterService.remove(id).subscribe(
    result => {
      this.gotoList();
    },
    error => console.error(error)
  );
}

    // onSaveData() {
    //   this.dataStorageService.storeGroundwater().subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
    // }


    private initForm() {
      // tslint:disable-next-line:prefer-const
      let tubewellNo = 0;
      // tslint:disable-next-line:prefer-const
        let Location = '';
        // tslint:disable-next-line:prefer-const
        let aquiferMaterial = '';
        // tslint:disable-next-line:prefer-const
        let Latitude = 0;
        // tslint:disable-next-line:prefer-const
        let totalDrillDepth = 0;
        // tslint:disable-next-line:prefer-const
        let Longtitude = 0;
        // tslint:disable-next-line:prefer-const
        let housingLength = 0;
        // tslint:disable-next-line:prefer-const
        let Elevation = 0;
        // tslint:disable-next-line:prefer-const
        let screenLength = 0;
        // tslint:disable-next-line:prefer-const
        let typeOfTubewell = '';
        // tslint:disable-next-line:prefer-const
        let typeOfScreen = '';
        // tslint:disable-next-line:prefer-const
        let tubewellHousingPipeSize = 0;
        // tslint:disable-next-line:prefer-const
        let pumpingDischarge = 0;
        // tslint:disable-next-line:prefer-const
        let tubewellScreenAndCasingPipeSize = 0;
        // tslint:disable-next-line:prefer-const
        let Drawdown = 0;
        // tslint:disable-next-line:prefer-const
        let staticWaterLevel = 0;
        // tslint:disable-next-line:prefer-const
        let aquiferStorageCoefficient = 0;
        // tslint:disable-next-line:prefer-const
        let aquiferTransmissivity = 0;
        // tslint:disable-next-line:prefer-const
        let brandOfPump = '';
        // tslint:disable-next-line:prefer-const
        let Power = 0;
        // tslint:disable-next-line:prefer-const
        let sizeOfPumpHouse = 0;
        // tslint:disable-next-line:prefer-const
        let Head = 0;
        // tslint:disable-next-line:prefer-const
        let heightOfOverheadTank = 0;
        // tslint:disable-next-line:prefer-const
        let pumpDischarge = 0;
        // tslint:disable-next-line:prefer-const
        let volumeOfOverheadTank = 0;
        // tslint:disable-next-line:prefer-const
        let efficiencyOfMotor = 0;
        // tslint:disable-next-line:prefer-const
        let efficiencyOfPump = 0;
        // tslint:disable-next-line:prefer-const
        let pumpLoweringDepth = 0;
        // tslint:disable-next-line:prefer-const
        let columnPipeSize = 0;
        // tslint:disable-next-line:prefer-const
        let columnType = '';
        // tslint:disable-next-line:prefer-const
        let lengthOf11kvHTTransmissionLine = 0;
        // tslint:disable-next-line:prefer-const
        let transformerCapacity = 0;
        // tslint:disable-next-line:prefer-const
        let transmissionLine = 0;
        // tslint:disable-next-line:prefer-const
        let controlPanel = 0;
        // tslint:disable-next-line:prefer-const
        let noOfPoles = 0;
        // tslint:disable-next-line:prefer-const
        let volatageStabilizer = 0;
        // tslint:disable-next-line:prefer-const
        let typeOfDistributionSystem = '';
        // tslint:disable-next-line:prefer-const
        let noOfOutlets = 0;
        // tslint:disable-next-line:prefer-const
        let lengthOfOpenChannel = 0;
        // tslint:disable-next-line:prefer-const
        let sizeOfAlphaAlphaValve = 0;
        // tslint:disable-next-line:prefer-const
        let pipeMaterial = '';
        // tslint:disable-next-line:prefer-const
        let lengthOfPipe = 0;
        // tslint:disable-next-line:prefer-const
        let noOfSurgeRaiser = 0;

    this.page6Form = new FormGroup({
      // 'id': new FormControl(),
      'tubewellNo': new FormControl(tubewellNo, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Location': new FormControl(Location, [Validators.required, ]),
      'aquiferMaterial': new FormControl(aquiferMaterial, [Validators.required, ]),
      'Latitude': new FormControl(Latitude, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'totalDrillDepth': new FormControl(totalDrillDepth, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Longtitude': new FormControl(Longtitude, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'housingLength': new FormControl(housingLength, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Elevation': new FormControl(Elevation, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'screenLength': new FormControl(screenLength, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'typeOfTubewell': new FormControl(typeOfTubewell, [Validators.required, ]),
      'typeOfScreen': new FormControl(typeOfScreen, [Validators.required, ]),
      'tubewellHousingPipeSize': new FormControl(tubewellHousingPipeSize, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpingDischarge': new FormControl(pumpingDischarge, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      // tslint:disable-next-line:max-line-length
      'tubewellScreenAndCasingPipeSize': new FormControl(tubewellScreenAndCasingPipeSize, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Drawdown': new FormControl(Drawdown, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'staticWaterLevel': new FormControl(staticWaterLevel, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'aquiferStorageCoefficient': new FormControl(aquiferStorageCoefficient, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'aquiferTransmissivity': new FormControl(aquiferTransmissivity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'brandOfPump': new FormControl(brandOfPump, [Validators.required, ]),
      'Power': new FormControl(Power, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'sizeOfPumpHouse': new FormControl(sizeOfPumpHouse, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Head': new FormControl(Head, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'heightOfOverheadTank': new FormControl(heightOfOverheadTank, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpDischarge': new FormControl(pumpDischarge, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'volumeOfOverheadTank': new FormControl(volumeOfOverheadTank, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'efficiencyOfMotor': new FormControl(efficiencyOfMotor, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'efficiencyOfPump': new FormControl(efficiencyOfPump, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpLoweringDepth': new FormControl(pumpLoweringDepth, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'columnPipeSize': new FormControl(columnPipeSize, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'columnType': new FormControl(columnType, [Validators.required, ]),
      // tslint:disable-next-line:max-line-length
      'lengthOf11kvHTTransmissionLine': new FormControl(lengthOf11kvHTTransmissionLine, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'transformerCapacity': new FormControl(transformerCapacity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'transmissionLine': new FormControl(transmissionLine, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'controlPanel': new FormControl(controlPanel, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'noOfPoles': new FormControl(noOfPoles, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'volatageStabilizer': new FormControl(volatageStabilizer, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'typeOfDistributionSystem': new FormControl(typeOfDistributionSystem, [Validators.required, ]),
      'noOfOutlets': new FormControl(noOfOutlets, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'lengthOfOpenChannel': new FormControl(lengthOfOpenChannel, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'sizeOfAlphaAlphaValve': new FormControl(sizeOfAlphaAlphaValve, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pipeMaterial': new FormControl(pipeMaterial, [Validators.required, ]),
      'lengthOfPipe': new FormControl(lengthOfPipe, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'noOfSurgeRaiser': new FormControl(noOfSurgeRaiser, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    if (this.editMode) {
      this.sub = this.groundwaterService.get(this.id).subscribe((groundwater: any) => {
        console.log(groundwater);
          if (groundwater) {
          this.page6Form.patchValue({
            tubewellNo: groundwater.tubewellNo,
            Location : groundwater.location,
            aquiferMaterial : groundwater.aquiferMaterial,
            Latitude : groundwater.latitude,
            totalDrillDepth : groundwater.totalDrillDepth,
            Longtitude : groundwater.longtitude,
            housingLength : groundwater.housingLength,
            Elevation : groundwater.elevation,
            screenLength : groundwater.screenLength,
            typeOfTubewell : groundwater.typeOfTubewell,
            typeOfScreen : groundwater.typeOfScreen,
            tubewellHousingPipeSize : groundwater.tubewellHousingPipeSize,
            pumpingDischarge : groundwater.pumpingDischarge,
            tubewellScreenAndCasingPipeSize : groundwater.tubewellScreenAndCasingPipeSize,
            Drawdown : groundwater.drawdown,
            staticWaterLevel: groundwater.staticWaterLevel,
            aquiferStorageCoefficient : groundwater.aquiferStorageCoefficient,
            aquiferTransmissivity : groundwater.aquiferTransmissivity,
            brandOfPump : groundwater.brandOfPump,
            Power : groundwater.power,
            sizeOfPumpHouse : groundwater.sizeOfPumpHouse,
            Head : groundwater.head,
            heightOfOverheadTank : groundwater.heightOfOverheadTank,
            pumpDischarge : groundwater.pumpDischarge,
            volumeOfOverheadTank : groundwater.volumeOfOverheadTank,
            efficiencyOfMotor : groundwater.efficiencyOfMotor,
            efficiencyOfPump : groundwater.efficiencyOfPump,
            pumpLoweringDepth : groundwater.pumpLoweringDepth,
            columnPipeSize : groundwater.columnPipeSize,
            columnType : groundwater.columnType,
            lengthOf11kvHTTransmissionLine : groundwater.lengthOf11kvHTTransmissionLine,
            transformerCapacity : groundwater.transformerCapacity,
            transmissionLine : groundwater.transmissionLine,
            controlPanel : groundwater.controlPanel,
            noOfPoles : groundwater.noOfPoles,
            volatageStabilizer : groundwater.volatageStabilizer,
            typeOfDistributionSystem : groundwater.typeOfDistributionSystem,
            noOfOutlets : groundwater.noOfOutlets,
            lengthOfOpenChannel : groundwater.lengthOfOpenChannel,
            sizeOfAlphaAlphaValve : groundwater.sizeOfAlphaAlphaValve,
            pipeMaterial : groundwater.pipeMaterial,
            lengthOfPipe : groundwater.lengthOfPipe,
            noOfSurgeRaiser : groundwater.noOfSurgeRaiser,
          });
        }
    });
  }
  }
}
