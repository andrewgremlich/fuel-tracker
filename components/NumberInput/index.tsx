import { FC, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.css";

type NumberInputProps = {
  label: string;
  allowNegativeValues?: boolean;
  step?: number;
};

export const NumberInput: FC<NumberInputProps> = ({
  label,
  step = 0.25,
  allowNegativeValues = true,
}) => {
  const [numberValue, setNumberValue] = useState(0);

  return (
    <div>
      <label className={`${styles["label"]}`} htmlFor="number-input">
        {label}
      </label>
      <div className={`${styles["number-input"]}`}>
        <input
          id="number-input"
          // TODO: this may not fly for a while...
          disabled={true}
          className={`${styles["input"]}`}
          type="text"
          placeholder="0"
          step={step}
          value={numberValue}
        />
        <div className={`${styles["stepper"]}`}>
          <FiChevronUp
            size={"25px"}
            className={`${styles["icons"]}`}
            onClick={() => setNumberValue(numberValue + step)}
          />
          <FiChevronDown
            size={"25px"}
            className={`${styles["icons"]}`}
            onClick={() =>
              allowNegativeValues
                ? setNumberValue(numberValue - step)
                : setNumberValue(
                  numberValue - step >= 0 ? numberValue - step : 0
                )
            }
          />
        </div>
      </div>
    </div>
  );
};
