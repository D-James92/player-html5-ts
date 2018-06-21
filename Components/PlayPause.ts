namespace PlayerMS.Components {
    export class PlayPauseComponent extends BaseComponent implements IComponent {

        constructor() {
            super();
        }

        public Generate() : HTMLElement{
            var el = document.createElement('span');
            el.style.color = this._colorIconText.GetCode();
            el.innerHTML = "test";
            return el;
        }

    }
}