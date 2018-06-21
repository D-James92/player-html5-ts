var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PlayerMS;
(function (PlayerMS) {
    var PlayerCore = /** @class */ (function () {
        function PlayerCore() {
        }
        PlayerCore.prototype.Init = function () {
            console.log("INIT MS PLAYER");
        };
        PlayerCore.version = "";
        PlayerCore.msApiServer = "http://localhost:5000";
        return PlayerCore;
    }());
    PlayerMS.PlayerCore = PlayerCore;
})(PlayerMS || (PlayerMS = {}));
var PlayerMS;
(function (PlayerMS) {
    var Classes;
    (function (Classes) {
        var RGBAColor = /** @class */ (function () {
            function RGBAColor() {
            }
            RGBAColor.prototype.SetColor = function (red, green, blue, alpha) {
                this.RED = red;
                this.GREEN = green;
                this.BLUE = blue;
                this.ALPHA = alpha;
            };
            RGBAColor.prototype.GetCode = function () {
                return "rgba(" + this.RED + "," + this.GREEN + "," + this.BLUE + "," + this.ALPHA + ")";
            };
            return RGBAColor;
        }());
        Classes.RGBAColor = RGBAColor;
    })(Classes = PlayerMS.Classes || (PlayerMS.Classes = {}));
})(PlayerMS || (PlayerMS = {}));
var PlayerMS;
(function (PlayerMS) {
    var Components;
    (function (Components) {
        var BaseComponent = /** @class */ (function () {
            function BaseComponent() {
                this._colorIconText.SetColor(255, 0, 0, 1);
            }
            return BaseComponent;
        }());
        Components.BaseComponent = BaseComponent;
    })(Components = PlayerMS.Components || (PlayerMS.Components = {}));
})(PlayerMS || (PlayerMS = {}));
var PlayerMS;
(function (PlayerMS) {
    var Components;
    (function (Components) {
        var PlayPauseComponent = /** @class */ (function (_super) {
            __extends(PlayPauseComponent, _super);
            function PlayPauseComponent() {
                return _super.call(this) || this;
            }
            PlayPauseComponent.prototype.Generate = function () {
                var el = document.createElement('span');
                el.style.color = this._colorIconText.GetCode();
                return el;
            };
            return PlayPauseComponent;
        }(Components.BaseComponent));
        Components.PlayPauseComponent = PlayPauseComponent;
    })(Components = PlayerMS.Components || (PlayerMS.Components = {}));
})(PlayerMS || (PlayerMS = {}));
