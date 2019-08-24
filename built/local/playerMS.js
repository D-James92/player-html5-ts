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
    var Classes;
    (function (Classes) {
        var SvgIcons = /** @class */ (function () {
            function SvgIcons() {
            }
            SvgIcons.basePath = 'assets/svg/';
            SvgIcons.iconPlay = SvgIcons.basePath + 'ic_play_normal.svg';
            SvgIcons.iconPause = SvgIcons.basePath + 'ic_pause_normal.svg';
            SvgIcons.iconStop = SvgIcons.basePath + 'ic_pause_normal.svg';
            SvgIcons.iconPrevious = SvgIcons.basePath + 'ic_previous_normal.svg';
            SvgIcons.iconNext = SvgIcons.basePath + 'ic_next_normal.svg';
            return SvgIcons;
        }());
        Classes.SvgIcons = SvgIcons;
    })(Classes = PlayerMS.Classes || (PlayerMS.Classes = {}));
})(PlayerMS || (PlayerMS = {}));
var PlayerMS;
(function (PlayerMS) {
    var Components;
    (function (Components) {
        var BaseComponent = /** @class */ (function () {
            function BaseComponent() {
                this._colorIconText = new PlayerMS.Classes.RGBAColor();
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
        var SvgIcons = PlayerMS.Classes.SvgIcons;
        var PlayPauseComponent = /** @class */ (function (_super) {
            __extends(PlayPauseComponent, _super);
            function PlayPauseComponent() {
                return _super.call(this) || this;
            }
            PlayPauseComponent.prototype.Generate = function () {
                // element
                var ic = document.createElement('img');
                ic.id = 'ic_playpause';
                // styles
                ic.style.color = this._colorIconText.GetCode();
                ic.style.width = '20px';
                ic.style.height = '20px';
                // attributes
                ic.setAttribute('active', '0');
                ic.setAttribute('src', SvgIcons.iconPlay);
                // events
                ic.addEventListener("click", this.PlayPauseEvent);
                // return
                return ic;
            };
            PlayPauseComponent.prototype.PlayPauseEvent = function () {
                var ic = document.getElementById('ic_playpause');
                var active = ic.getAttribute('active');
                if (active == '0') {
                    ic.setAttribute('src', SvgIcons.iconPause);
                    ic.setAttribute('active', '1');
                    // TODO PLAY VIDEO
                }
                else {
                    ic.setAttribute('src', SvgIcons.iconPlay);
                    ic.setAttribute('active', '0');
                    // TODO PAUSE VIDEO
                }
            };
            return PlayPauseComponent;
        }(Components.BaseComponent));
        Components.PlayPauseComponent = PlayPauseComponent;
    })(Components = PlayerMS.Components || (PlayerMS.Components = {}));
})(PlayerMS || (PlayerMS = {}));
