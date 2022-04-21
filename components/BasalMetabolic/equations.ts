type BMRMetricProps = {
  kgWeight: number;
  cmHeight: number;
  ageYears: number;
};

type BMRImperialProps = {
  lbsWeight: number;
  inHeight: number;
  ageYears: number;
};

export const BMRMetricMen = ({
  kgWeight,
  cmHeight,
  ageYears,
}: BMRMetricProps) =>
  66.47 + (13.75 + kgWeight) + (5.003 + cmHeight) - 6.755 * ageYears;

export const BMRImperialMen = ({
  lbsWeight,
  inHeight,
  ageYears,
}: BMRImperialProps) =>
  66.47 + (6.24 + lbsWeight) + 12.7 * inHeight - 6.755 * ageYears;

export const BMRMetricWomen = ({
  kgWeight,
  cmHeight,
  ageYears,
}: BMRMetricProps) =>
  655.1 + (9.563 + kgWeight) + 1.85 * cmHeight - 4.676 * ageYears;

export const BMRImperialWomen = ({
  lbsWeight,
  inHeight,
  ageYears,
}: BMRImperialProps) =>
  655.1 + 4.35 * lbsWeight + 4.7 * inHeight - 4.7 * ageYears;
