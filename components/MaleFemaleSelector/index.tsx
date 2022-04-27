import { Gender } from "models/form"

export const MaleFemaleSelector = () => (
  <div className={'radio-buttons'}>
    <input
      type="radio"
      value={Gender.MALE}
      name="gender"
      id="maleRadio"
      defaultChecked
    />
    <label
      htmlFor="maleRadio"
      className={`radio-button-label`}
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
      className={`radio-button-label`}
    >
      Female
    </label>
  </div>
)