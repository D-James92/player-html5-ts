namespace PlayerMS.Classes {

    export class RGBAColor {

        private RED: number;
        private GREEN: number;
        private BLUE: number;
        private ALPHA: number;

        public SetColor(red: number, green: number, blue: number, alpha: number) {
            this.RED = red;
            this.GREEN = green;
            this.BLUE = blue;
            this.ALPHA = alpha;
        }

        public GetCode() {
            return `rgba(${this.RED},${this.GREEN},${this.BLUE},${this.ALPHA})`;
        }

    }
}