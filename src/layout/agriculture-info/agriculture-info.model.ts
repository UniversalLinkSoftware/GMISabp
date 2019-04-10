export class Agriculture {
    constructor (
        public id: number,
        public cropName: string,
        public plantingDate: string,
        public plantingWeek: string,
        public cropArea: number,
        public harvestingDate: string,
        public harvestingWeek: string,
        public averageCropYield: number,
        public avgSeed: number,
        public avgDAP: number,
        public avgHumanLabour: number,
        public avgOrganicManure: number,
        public avgPotash: number,
        public avgAnimalLabour: number,
        public avgUrea: number,
        public avgMachineLabour: number,
        public existing: boolean,
        public neareastAgricultureExtensionOffice: string,
        public extensionOfficeDistance: number,
        public neareastAgrovetOffice: string,
        public agrovetOfficeDistance: number
        ) {}
}
export class ProposedAgriculture {
    constructor (
        public proposedCropName: string,
        public proposedPlantingDate: string,
        public proposedPlantingWeek: string,
        public proposedCropArea: number,
        public proposedHarvestingDate: string,
        public proposedHarvestingWeek: string,
        public proposedAverageCropYield: number,
        public proposedAvgSeed: string,
        public proposedAvgDap: number,
        public proposedAvgHumanLabour: number,
        public proposedAvgOrganicManure: number,
        public proposedAvgPotash: number,
        public proposedAvgAnimalLabour: number,
        public proposedAvgUrea: number,
        public proposedAvgMachineLabour: number,
        ) {}
    }
// }
// export class Office {
//     constructor (
//         public NeareastAgricultureExtensionOffice: string,
//         public extensionOfficeDistance: number,
//         public neareastAgrovetOffice: string,
//         public agrovetOfficeDistance: number,
//          ) {}
// }
