import { FormEventHandler, useState } from "react";

import styles from "./styles.module.css";

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

enum MeasurementSystem {
  METRIC = "metric",
  IMP = "imperial",
}

export const BMRForm = () => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [measurement, setMeasurement] = useState<MeasurementSystem>(
    MeasurementSystem.IMP
  );

  const handleFormChange: FormEventHandler<HTMLFormElement>  = (evt) => {
    console.log(evt);
  }

  return (
    <div className={`${styles["bmr-form"]}`}>
      <h2>BMR Form</h2>
      <p>Using Harris-Benedict BMR</p>
      <form onChange={handleFormChange}>
        <div className="gender-radio-buttons">
          <input type="radio" value={Gender.MALE} name="gender" id="maleRadio" />
          <label htmlFor="maleRadio">Male</label>
          <input
            type="radio"
            value={Gender.FEMALE}
            name="gender"
            id="femaleRadio"
          />
          <label htmlFor="femaleRadio">Female</label>
        </div>
        <div className="metric-or-imperial">
          <input
            type="radio"
            value={MeasurementSystem.METRIC}
            name="measurement"
            id="metricRadio"
          />
          <label htmlFor="metricRadio">Metric</label>
          <input
            type="radio"
            value={MeasurementSystem.IMP}
            name="measurement"
            id="imperialRadio"
          />
          <label htmlFor="imperialRadio">Imperial</label>
        </div>
        <div className="measurements">
          <label htmlFor="height">Height</label>
          <input type="number" id="height" name="height" placeholder="cm" />
          <label htmlFor="weight">Weight</label>
          <input type="number" id="weight" name="weight" placeholder="kg" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="years" />
        </div>
      </form>
    </div>
  );
};
