import { FC } from "react"

import { MeasurementSystem, MeasurementSystemType } from "models/form"

export const PersonalStats: FC<MeasurementSystemType> = ({ measurement }) => (
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
)