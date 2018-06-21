var PlayerMS;
(function (PlayerMS) {
    var version = "";
    var msApiServer = "http://localhost:5000";
    function Init() {
        window.onload = function () {
            console.log("INIT MS PLAYER: " + msApiServer);
            var x = new PlayerMS.Components.PlayPauseComponent();
            document.body.appendChild(x.Generate());
        };
    }
    PlayerMS.Init = Init;
})(PlayerMS || (PlayerMS = {}));
