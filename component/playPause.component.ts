import { BaseComponent } from './base.component';
import { IComponent } from './i.component';
import { SvgIcons } from '../utility/svg.icons';

export class PlayPauseComponent extends BaseComponent implements IComponent {

    constructor() {
        super();
    }

    public generate() : HTMLElement{
        // element
        let ic = document.createElement('img');
        ic.id = 'ic_playpause';
        // styles
        ic.style.color = this._colorIconText.getCode();
        ic.style.width = '20px';
        ic.style.height = '20px';
        // attributes
        ic.setAttribute('active', '0');
        ic.setAttribute('src', SvgIcons.iconPlay);
        // events
        ic.addEventListener("click", this.playPauseEvent);
        // return
        return ic;
    }

    public playPauseEvent() {
        let ic = document.getElementById('ic_playpause');
        let active = ic.getAttribute('active');
        if(active == '0') {
            ic.setAttribute('src', SvgIcons.iconPause);
            ic.setAttribute('active', '1');
            // TODO PLAY VIDEO
        } else {
            ic.setAttribute('src', SvgIcons.iconPlay);
            ic.setAttribute('active', '0');
            // TODO PAUSE VIDEO
        }
    }
}
