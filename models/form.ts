export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export enum MeasurementSystem {
  METRIC = "metric",
  IMP = "imperial",
}

export type MeasurementSystemType = { measurement: MeasurementSystem };

export enum FormType {
  GENDER = "gender",
  INTENSITY = "intensity",
  MEASUREMENT = "measurement",
  HEIGHT = "HEIGHT",
  WEIGHT = "WEIGHT",
  AGE = "AGE",
}
