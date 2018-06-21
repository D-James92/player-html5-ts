namespace PlayerMS.Components {
    export class BaseComponent {

        protected _colorIconText: Classes.RGBAColor = new Classes.RGBAColor();

        constructor() {
            this._colorIconText.SetColor(255, 0, 0, 1);
        }

    }
}