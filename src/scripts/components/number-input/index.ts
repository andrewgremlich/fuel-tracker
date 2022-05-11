import { styles } from "./style";

// https://kinsta.com/blog/web-components/
export class NumberInput extends HTMLElement {
  number: number = 0;
  step: number = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      ${styles}
      <p class="number-output">${this.number}</p>
      <div class="number-controls">
        <icon-button size="24px" icon="arrow-up"></icon-button>
        <icon-button size="24px" icon="arrow-down"></icon-button>
      </div>
    `;
    }
  }

  static get observedAttributes() {
    return ["number", "step"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "number":
        this.number = +newValue;
        break;

      case "step":
        this.step = +newValue;
        break;
    }
  }

  events(numberOutput?: Element | null) {
    const arrowUp = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-up']"
    );
    const arrowDown = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-down']"
    );

    arrowUp?.addEventListener("click", (e) => {
      this.number = this.number + this.step;

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });

    arrowDown?.addEventListener("click", (e) => {
      this.number = this.number - this.step;

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });
  }

  connectedCallback() {
    const numberOutput = this.shadowRoot?.querySelector(".number-output");

    if (numberOutput) {
      numberOutput.innerHTML = this.number.toString();
    }

    this.events(numberOutput);
  }
}
