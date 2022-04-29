import { FC, FormEventHandler, useEffect, useState } from "react";

import { MaleFemaleSelector } from "components/MaleFemaleSelector";
import { MeasurementSelector } from "components/MeasurementSelector";
import { PersonalStats } from "components/PersonalStats";
import { IntensitySelector } from "components/IntensitySelector";
import {
  Gender,
  MeasurementSystem,
  FormType,
  PersonalStatsType,
  IntensityType,
  BMRFormProps,
} from "models/form";

import styles from "./styles.module.css";
import { BMRMetricWomen, BMRMetricMen, lbsToKg, inchesToCm } from "./equations";

export const BMRForm: FC<BMRFormProps> = ({ setProjectedBmr }) => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [measurement, setMeasurement] = useState<MeasurementSystem>(
    MeasurementSystem.IMP
  );
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [intensity, setIntensity] = useState<number>(0);

  const handleFormChange: FormEventHandler<HTMLFormElement> = (evt) => {
    const target = evt.target as HTMLInputElement;
    const getFormType = target.getAttribute("data-formtype") as FormType &
      PersonalStatsType &
      IntensityType;

    switch (getFormType) {
      case FormType.GENDER:
        setGender(target.value as Gender);
        break;

      case FormType.MEASUREMENT:
        setMeasurement(target.value as MeasurementSystem);
        break;

      case PersonalStatsType.AGE:
        setAge(+target.value);
        break;

      case PersonalStatsType.HEIGHT:
        setHeight(+target.value);
        break;

      case PersonalStatsType.WEIGHT:
        setWeight(+target.value);
        break;

      case IntensityType.INTENSITY:
        setIntensity(+target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    let preCalcWeight =
      measurement === MeasurementSystem.IMP ? lbsToKg(weight) : weight;
    let preCalcHeight =
      measurement === MeasurementSystem.IMP ? inchesToCm(height) : height;
    let bmrCalc =
      (gender === Gender.MALE
        ? BMRMetricMen({
          kgWeight: preCalcWeight,
          cmHeight: preCalcHeight,
          ageYears: age,
        })
        : BMRMetricWomen({
          kgWeight: preCalcWeight,
          cmHeight: preCalcHeight,
          ageYears: age,
        })) * intensity;

    setProjectedBmr(Math.ceil(bmrCalc))
  }, [gender, measurement, age, height, weight, intensity])

  return (
    <div className={`${styles["bmr-form"]}`}>
      <form onChange={handleFormChange}>
        <MaleFemaleSelector />
        <MeasurementSelector />
        <PersonalStats {...{ measurement }} />
        <IntensitySelector />
      </form>

      <p>Using Harris-Benedict BMR revised by Roza and Shizgal</p>
    </div>
  );
};
