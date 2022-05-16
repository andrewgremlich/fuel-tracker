import { styles } from "./style";

export class ToasterOven extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        ${styles}
        <div class="toaster-oven">
          <slot></slot>
        </div>
      `;
    }
  }
}
