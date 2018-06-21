namespace PlayerMS {

    const version: string = "";
    const msApiServer: string = "http://localhost:5000";

    export function Init() {
        window.onload = function() {
            console.log("INIT MS PLAYER: " + msApiServer);
            let x = new Components.PlayPauseComponent();
            document.body.appendChild(x.Generate());
        }
    }

}