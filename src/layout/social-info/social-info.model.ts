export class Social {
    constructor(
        public id: number,
        public  numberOfHousehold: number,
         public womenInHousehold: number,
        public yearOfSurvey: number,
         public male: number,
         public female: number,
         public totalPopulation: number,
        public majorSourceOfIncome: string,
         public annualIncomePerFamily: number,
         public fromAgriculture: number,
         public fromOtherSource: number,
         public literacyRate: number,
         public literacyMale: number,
         public literacyFemale: number,
         public populationMigrationIn: number,
         public populationMigrationOut: number,
         public annualfoodSufficiency: string,
         ) {}
}
