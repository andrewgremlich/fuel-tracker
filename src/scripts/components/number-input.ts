const styles = `
<style>
  :host {
    font-size: 1rem;
    font-family: sans-serif;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .number-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .number-control {
    border: none;
    background: transparent;
    cursor: pointer;
  }
</style>
`;

// https://kinsta.com/blog/web-components/
export class NumberInput extends HTMLElement {
  number: number = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      ${styles}
      <p class="number-output">${this.number}</p>
      <div class="number-controls">
        <icon-button icon="arrow-up"></icon-button>
        <icon-button icon="arrow-down"></icon-button>
      </div>
    `;
    }
  }

  static get observedAttributes() {
    return ["number"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(name, oldValue, newValue);
    if (name === "number") {
      this.number = +newValue;
    }
  }

  connectedCallback() {
    const numberOutput = this.shadowRoot?.querySelector(".number-output");
    const arrowUp = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-up']"
    );
    const arrowDown = this.shadowRoot?.querySelector(
      "icon-button[icon='arrow-down']"
    );

    if (numberOutput) {
      numberOutput.innerHTML = this.number.toString();
    }

    arrowUp?.addEventListener("click", (e) => {
      this.number++;

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });

    arrowDown?.addEventListener("click", (e) => {
      this.number--;

      if (numberOutput) {
        numberOutput.innerHTML = this.number.toString();
      }
    });
  }
}
