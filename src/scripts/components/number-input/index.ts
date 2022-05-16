import { styles } from "./style";

enum NumberInputProps {
  number = "number",
  step = "step",
  precision = "precision",
  label = "label",
  allowNegativeValues = "allow-negative-values",
}

// https://kinsta.com/blog/web-components/
export class NumberInput extends HTMLElement {
  number: number = 0;
  step: number = 0;
  precision: number = 0;
  label: string = "";
  allowNegativeValues: boolean = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      ${styles}
      <div class="number-output-wrapper">
        <p class="number-output">${this.number}</p>
        <p class="number-output-label">${this.label}</p>
      </div>
      <div class="number-controls">
        <icon-button size="24px" icon="arrow-up"></icon-button>
        <icon-button size="24px" icon="arrow-down"></icon-button>
      </div>
    `;
    }
  }

  static get observedAttributes() {
    return ["number", "step", "label", "allow-negative-values"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case NumberInputProps.number:
        this.number = +newValue;
        break;

      case NumberInputProps.step:
        this.step = +newValue;
        const [, decimal] = newValue.split(".");
        this.precision = decimal ? decimal.length : 0;
        break;

      case NumberInputProps.label:
        this.label = newValue;
        break;

      case NumberInputProps.allowNegativeValues:
        this.allowNegativeValues = newValue === "true";
        break;
    }
  }

  connectedCallback() {
    const numberOutput = this.shadowRoot?.querySelector(".number-output");
    const numberOutputLabel = this.shadowRoot?.querySelector(
      ".number-output-label"
    );

    if (numberOutput) {
      numberOutput.innerHTML = this.number.toString();
    }

    this.events(numberOutput);

    if (numberOutputLabel) {
      numberOutputLabel.innerHTML = this.label;
    }
  }

  withPrecision(num: number) {
    return +num.toFixed(this.precision);
  }

  events(numberOutput?: Element | null) {
    const arrowUp = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-up']"
    );
    const arrowDown = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-down']"
    );

    arrowUp?.addEventListener("click", (e) => {
      this.number = this.withPrecision(this.number + this.step);

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });

    arrowDown?.addEventListener("click", (e) => {
      const number = this.withPrecision(this.number - this.step);
      const isLessThanZero = number > 0;

      console.log(number, isLessThanZero, this.allowNegativeValues);

      this.number = this.allowNegativeValues || isLessThanZero ? number : 0;

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });
  }
}
