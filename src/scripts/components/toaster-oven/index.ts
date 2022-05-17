import { iconsDict, Icons } from "../../icons";

import { styles } from "./style";

enum ToasterOvenProps {
  DataActive = "data-active",
  Icon = "icon",
}

export class ToasterOven extends HTMLElement {
  active = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        ${styles}
        <div class="toaster-oven">
          <div class="icon"></div>
          <div class="desc">
            <slot></slot>
          </div>
        </div>
      `;
    }
  }

  static get observedAttributes() {
    return ["data-active", "icon"];
  }

  attributeChangedCallback(
    name: ToasterOvenProps,
    oldValue: string,
    newValue: string
  ) {
    switch (name) {
      case ToasterOvenProps.DataActive:
        if (newValue === "true") {
          this.active = true;
          this.shadowRoot
            ?.querySelector(".toaster-oven")
            ?.classList.toggle("active");
        }
        break;

      case ToasterOvenProps.Icon:
        const iconSelect = this.shadowRoot?.querySelector(".icon");

        if (iconSelect) {
          iconSelect.innerHTML = iconsDict[newValue as Icons];
        }

        break;

      default:
        break;
    }
  }

  connectedCallback() {
    console.log("connectedCallback");
  }
}
