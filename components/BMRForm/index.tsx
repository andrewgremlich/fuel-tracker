import { FormEventHandler, useState } from "react";

import { MaleFemaleSelector } from "components/MaleFemaleSelector";
import { MeasurementSelector } from "components/MeasurementSelector";
import { PersonalStats } from "components/PersonalStats";
import { IntensitySelector } from "components/IntensitySelector";
import { Gender, MeasurementSystem, FormType } from "models/form";

import styles from "./styles.module.css";

export const BMRForm = () => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [measurement, setMeasurement] = useState<MeasurementSystem>(
    MeasurementSystem.IMP
  );

  const handleFormChange: FormEventHandler<HTMLFormElement> = (evt) => {
    const target = evt.target as HTMLInputElement;
    const getFormType = target.getAttribute("data-formtype") as FormType;

    switch (getFormType) {
      case FormType.GENDER:
        setGender(target.value as Gender);
        break;

      case FormType.MEASUREMENT:
        setMeasurement(target.value as MeasurementSystem);
        break;

      default:
        break;
    }
  };

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
