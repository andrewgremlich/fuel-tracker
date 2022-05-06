type BMRMetricProps = {
  kgWeight: number;
  cmHeight: number;
  ageYears: number;
};

export const BMRMetricMen = ({
  kgWeight,
  cmHeight,
  ageYears,
}: BMRMetricProps) =>
  88.362 + 13.397 * kgWeight + 4.799 * cmHeight - 5.677 * ageYears;

export const BMRMetricWomen = ({
  kgWeight,
  cmHeight,
  ageYears,
}: BMRMetricProps) =>
  447.593 + 9.247 * kgWeight + 3.098 * cmHeight - 4.33 * ageYears;

export const lbsToKg = (lbs: number) => lbs * 0.453592;

export const inchesToCm = (inches: number) => inches * 2.54;