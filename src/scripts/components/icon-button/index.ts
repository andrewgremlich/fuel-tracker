import { arrowDown, arrowUp, alarm, Icons } from "../../features/icons";
import { styles } from "./style";

enum IconButtonProps {
  size = "size",
  icon = "icon",
}

export class IconButton extends HTMLElement {
  icon: Icons = Icons.alarm;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        ${styles}
        <button></button>
      `;
    }
  }

  static get observedAttributes() {
    return ["icon", "size"];
  }

  attributeChangedCallback(
    name: IconButtonProps,
    oldValue: string,
    newValue: string
  ) {
    switch (name) {
      case IconButtonProps.icon:
        this.icon = newValue as Icons;
        break;
      case IconButtonProps.size:
        this.style.setProperty("--size", newValue);
        break;
    }
  }

  attachIcon(icon: Icons) {
    switch (icon) {
      case Icons.arrowUp:
        return arrowUp;
      case Icons.arrowDown:
        return arrowDown;
      default:
        return `${alarm} no icon found`;
    }
  }

  connectedCallback() {
    const button = this.shadowRoot?.querySelector("button");

    if (button) {
      button.innerHTML = this.attachIcon(this.icon);
    }
  }
}
