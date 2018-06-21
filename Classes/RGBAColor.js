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
