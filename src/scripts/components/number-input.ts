export class NumberInput extends HTMLElement {
  number: string = "0";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0.5rem;
          font-size: 1rem;
          font-family: sans-serif;
          color: #333;
          background-color: #fff;
          box-sizing: border-box;
        }
        input {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 4px;
          padding: 0.5rem;
          font-size: 1rem;
          font-family: sans-serif;
          color: #333;
          background-color: #fff;
          box-sizing: border-box;
        }
      </style>
      <input type="number" value="${this.number}" />
    `;
    }
  }

  static get observedAttributes() {
    return ["number"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(name, oldValue, newValue);
    if (name === "number") {
      this.number = newValue;
    }
  }

  connectedCallback() {
    const input = this.shadowRoot?.querySelector("input");

    if (input) {
      input.value = this.number;
    }

    input?.addEventListener("input", (e) => {
      this.number = (e.target as HTMLInputElement)?.value;
    });
  }
}
