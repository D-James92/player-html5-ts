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
