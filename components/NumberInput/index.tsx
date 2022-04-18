import { FC, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.css";

type NumberInputProps = {
  label: string;
  allowNegativeValues?: boolean;
  step?: number;
  valueChange?: (d: number) => void;
};

export const NumberInput: FC<NumberInputProps> = ({
  label,
  step = 0.25,
  allowNegativeValues = true,
  valueChange = () => {},
}) => {
  const [numberValue, setNumberValue] = useState(1);

  return (
    <div>
      <label className={`${styles["label"]}`} htmlFor="number-input">
        {label}
      </label>
      <div className={`${styles["number-input"]}`}>
        <p className={`${styles["number-display"]}`}>{numberValue}</p>
        <div className={`${styles["stepper"]}`}>
          <FiChevronUp
            size={"25px"}
            className={`${styles["icons"]}`}
            onClick={() => {
              const newValue = numberValue + step;

              setNumberValue(newValue);
              valueChange(newValue);
            }}
          />
          <FiChevronDown
            size={"25px"}
            className={`${styles["icons"]}`}
            onClick={() => {
              const newValue = numberValue - step;

              allowNegativeValues
                ? setNumberValue(newValue)
                : setNumberValue(newValue >= 0 ? newValue : 0);
              valueChange(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};
