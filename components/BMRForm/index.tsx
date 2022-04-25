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

  const handleFormChange: FormEventHandler<HTMLFormElement> = (evt) => {
    console.log(evt);
  };

  return (
    <div className={`${styles["bmr-form"]}`}>
      <form onChange={handleFormChange}>
        <div className={styles['radio-buttons']}>
          <input
            type="radio"
            value={Gender.MALE}
            name="gender"
            id="maleRadio"
            defaultChecked
          />
          <label
            htmlFor="maleRadio"
            className={`${styles["radio-button-label"]}`}
          >
            Male
          </label>
          <input
            type="radio"
            value={Gender.FEMALE}
            name="gender"
            id="femaleRadio"
          />
          <label
            htmlFor="femaleRadio"
            className={`${styles["radio-button-label"]}`}
          >
            Female
          </label>
        </div>
        <div className={styles['radio-buttons']}>
          <input
            type="radio"
            value={MeasurementSystem.METRIC}
            name="measurement"
            id="metricRadio"
          />
          <label
            htmlFor="metricRadio"
            className={`${styles["radio-button-label"]}`}
          >
            Metric
          </label>
          <input
            type="radio"
            defaultChecked
            value={MeasurementSystem.IMP}
            name="measurement"
            id="imperialRadio"
          />
          <label
            htmlFor="imperialRadio"
            className={`${styles["radio-button-label"]}`}
          >
            Imperial
          </label>
        </div>
        <div className="measurements">
          <label htmlFor="height">Height</label>
          <input
            className={`text-input`}
            type="number"
            id="height"
            name="height"
            placeholder={measurement === MeasurementSystem.METRIC ? "cm" : "in"}
          />
          <label htmlFor="weight">Weight</label>
          <input
            className={`text-input`}
            type="number"
            id="weight"
            name="weight"
            placeholder={measurement === MeasurementSystem.METRIC ? "kg" : "lb"}
          />
          <label htmlFor="age">Age</label>
          <input
            className={`text-input`}
            type="number"
            id="age"
            name="age"
            placeholder="years"
          />
        </div>
        <div>
          {/* Multiply results of equation by this. */}
          <label htmlFor="activity-intensity">Activity Intensity</label>
          <select name="activity-intensity" id="activity-intensity" className="select-input">
            <option value="1.2">Little Intensity</option>
            <option value="1.375">Light Intensity</option>
            <option value="1.55">Moderate Intensity</option>
            <option value="1.725">Heavy Intensity</option>
            <option value="1.9">Very Heavy Intensity</option>
          </select>
        </div>
      </form>

      <p>Using Harris-Benedict BMR revised by Roza and Shizgal</p>
    </div>
  );
};
