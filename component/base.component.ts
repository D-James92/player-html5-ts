import { RGBAColor } from '../utility/rgba.color';
export class BaseComponent {

    protected _colorIconText: RGBAColor = new RGBAColor();

    constructor() {
        this._colorIconText.setColor(255, 0, 0, 1);
    }

}
