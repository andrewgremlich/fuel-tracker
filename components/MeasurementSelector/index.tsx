import { MeasurementSystem } from "models/form";

export const MeasurementSelector = () => (
  <div className={'radio-buttons'}>
    <input
      type="radio"
      value={MeasurementSystem.METRIC}
      name="measurement"
      id="metricRadio"
    />
    <label
      htmlFor="metricRadio"
      className={`radio-button-label`}
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
      className={`radio-button-label`}
    >
      Imperial
    </label>
  </div>
)