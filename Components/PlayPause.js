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
                el.innerHTML = "test";
                return el;
            };
            return PlayPauseComponent;
        }(Components.BaseComponent));
        Components.PlayPauseComponent = PlayPauseComponent;
    })(Components = PlayerMS.Components || (PlayerMS.Components = {}));
})(PlayerMS || (PlayerMS = {}));
