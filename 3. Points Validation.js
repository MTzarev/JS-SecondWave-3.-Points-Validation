function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let result = 0;
    function calcBetween() {
        result = Number(Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))));
        if (result.toFixed(1) % 1 === 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }
        else if (result.toFixed(1) % 10 != 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }
    function X1Y1To0() {
        result = Number(Math.sqrt(((0 - x1) * (0 - x1)) + ((0 - y1) * (0 - y1))));
        if (result.toFixed(1) % 1 === 0) {
            return `{${x1}, ${y1}} to {${0}, ${0}} is valid`;
        }
        else if (result.toFixed(1) % 10 != 0) {
            return `{${x1}, ${y1}} to {${0}, ${0}} is invalid`;
        }
    }
    function X2Y2To0() {
        result = Number(Math.sqrt(((x2 - 0) * (x2 - 0)) + ((y2 - 0) * (y2 - 0))));
        if (result.toFixed(1) % 1 === 0) {
            return `{${x2}, ${y2}} to {${0}, ${0}} is valid`;
        }
        else if (result.toFixed(1) % 10 != 0) {
            return `{${x2}, ${y2}} to {${0}, ${0}} is invalid`;
        }
    }
    console.log(X1Y1To0());
    console.log(X2Y2To0());
    console.log(calcBetween());
}
pointsValidation([2, 1, 1, 1]);
