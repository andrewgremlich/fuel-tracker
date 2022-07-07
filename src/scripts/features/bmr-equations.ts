import { getById } from "./query";

type BMRMetricProps = {
  kgWeight: number;
  cmHeight: number;
  ageYears: number;
};

const BMRMetricMen = ({ kgWeight, cmHeight, ageYears }: BMRMetricProps) =>
  88.362 + 13.397 * kgWeight + 4.799 * cmHeight - 5.677 * ageYears;

const BMRMetricWomen = ({ kgWeight, cmHeight, ageYears }: BMRMetricProps) =>
  447.593 + 9.247 * kgWeight + 3.098 * cmHeight - 4.33 * ageYears;

const lbsToKg = (lbs: number) => lbs * 0.453592;

const inchesToCm = (inches: number) => inches * 2.54;

const bmrForm = getById("bmr-form") as HTMLFormElement;

// assemble form data into an object
const getFormData = () => {
  return Object.fromEntries(new FormData(bmrForm));
};

export const calculateBMR = () => {
  bmrForm.addEventListener("change", (e) => {
    console.log(getFormData());

    // const kgWeight = Number(getById("kg-weight").value);
    // const cmHeight = Number(getById("cm-height").value);
    // const ageYears = Number(getById("age-years").value);
  });
};
