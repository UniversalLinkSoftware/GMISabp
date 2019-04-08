export class Economic {
    constructor(
        public id: number,
        public  totalProjectCost: number,
        public bcRatio1: number,
        public costingYear: Date,
        public discountRate1: number,
        public eirr: number,
        public bcRatio2: number,
        public discountRate2: number,
         ) {}
}
