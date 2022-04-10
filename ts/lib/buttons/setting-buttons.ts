import Buttons from "./buttons.js";
import { dataInterface } from "../interfaces.js";

export default class SettingButtons extends Buttons {
  private dataButtons: dataInterface;

  constructor(data: dataInterface) {
    super();
    this.dataButtons = data;
  }

  public settingButtons(): void {
    if (typeof this.dataButtons.next === "string")
      this.$nextButton?.setAttribute("href", this.dataButtons.next);
    if (typeof this.dataButtons.previous === "string")
      this.$previousButton?.setAttribute("href", this.dataButtons.previous);
  }
}
