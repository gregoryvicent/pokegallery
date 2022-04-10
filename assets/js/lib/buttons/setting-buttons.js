import Buttons from "./buttons.js";
export default class SettingButtons extends Buttons {
    constructor(data) {
        super();
        this.dataButtons = data;
    }
    settingButtons() {
        var _a, _b;
        if (typeof this.dataButtons.next === "string")
            (_a = this.$nextButton) === null || _a === void 0 ? void 0 : _a.setAttribute("href", this.dataButtons.next);
        if (typeof this.dataButtons.previous === "string")
            (_b = this.$previousButton) === null || _b === void 0 ? void 0 : _b.setAttribute("href", this.dataButtons.previous);
    }
}
