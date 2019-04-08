export class RiverHydology {
  constructor(
    public id: number,
    public catchmentArea: number,
    public lngSlopeOfRiverAtHeadworksSite: string,
    public floodDischarge25: number,
    public floodDischarge50: number,
    public floodDischarge100: number,
    public methodOfFloodCalculation: string,
    public nameOfRiverSource: string,
    public riverWidthAtHeadworksSite: number,
    public averageAnnualRiverfall: number,
    public hydrologicalRegion: string,
    public riverBasin: string,

  ) {}
  }

  export class MainCanal {
    constructor(

      public id: number,
      public mCanalDirection: string,
      public mTotalLength: number,
      public mLinedTypeCanalLength: number,
      public mDesignDischarge: number,
      public mTopWidth: number,
      public mSlideSlope: string,
      public mNumberOfBranchCanal: number,
      public mBottomWidth: number,
      public mLongitudinalSlope: string,
      public mBranchCanalLength: number,
      public mUnlinedTypeCanalLength: number,
      public mTotalDepth: number,

    ) {}
  }

    export class BranchCanal {
      constructor(
        public id: number,
        public bNameOfBranchCanal: string,
        public bgca: number,
        public bcca: number,
        public bTotallength: number,
        public bLinedTypeCanalLength: number,
        public bUnlinedTypeCanalLength: number,
        public bDesignDischarge: number,
        public btertiary: string,
        public bSubBranchLength: string,
        public bCanalStructure: string,
  ) {}
  }
