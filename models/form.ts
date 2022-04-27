export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export enum MeasurementSystem {
  METRIC = "metric",
  IMP = "imperial",
}

export type MeasurementSystemType = { measurement: MeasurementSystem };
