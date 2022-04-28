export const IntensitySelector = () => (
  <div>
    {/* Multiply results of equation by this. */}
    <label htmlFor="activity-intensity">Activity Intensity</label>
    <select
      name="activity-intensity"
      id="activity-intensity"
      className="select-input"
      data-formtype="intensity"
    >
      <option value="1.2">Little Intensity</option>
      <option value="1.375">Light Intensity</option>
      <option value="1.55">Moderate Intensity</option>
      <option value="1.725">Heavy Intensity</option>
      <option value="1.9">Very Heavy Intensity</option>
    </select>
  </div>
);
