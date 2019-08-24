import { ESkin } from './skin.enum';
import { DefaultSkin } from './skin/default';

const version: string = "0.0.1";
const msApiServer: string = "http://localhost:5000";

export function Startup() {
    window.onload = function() {
        console.log("##### INIT MS PLAYER v" + version);
        // TODO: GET CONTENTID FROM URL

        // TODO: HTTP CALL MAINSTREAMING -> RETRIVE CONTENTID INFORMATION

        // STARTUP SKIN GENERATOR
        SkinElaboration(ESkin.Default);
    }
}

function SkinElaboration(skin: ESkin) {
    switch (skin) {
        case ESkin.Default: { 
            console.log("##### LOAD SKIN DEFAULT");
            document.body.appendChild(new DefaultSkin().generateSkin());
            break;
        }
        case ESkin.Jams: { 
            console.log("##### LOAD SKIN JAMS");
            document.body.appendChild(new DefaultSkin().generateSkin());
            break;
        }
    }
}