//ausrechnen

let ersteZahl = "";
let operator = "";
let zweiteZahl = "";

function rechnen(test) {
    console.log(test);

    const display = document.getElementById("display");
    display.value += test;

    if (test === "+" || test === "-" || test === "x" || test === ":") {
        ersteZahl = display.value.slice(0, -1)
        operator = (test);
        display.value = "";

    }

    if (test === "=") {
        zweiteZahl = display.value;

        let ergebnis;

        if (operator === "+") {
            ergebnis = Number(ersteZahl) + Number(zweiteZahl);
        }

        if (operator === "-") {
            ergebnis = Number(ersteZahl) - Number(zweiteZahl);
        }

        if (operator === "x") {
            ergebnis = Number(ersteZahl) * Number(zweiteZahl);
        }

        if (operator === ":") {
            ergebnis = Number(ersteZahl) / Number(zweiteZahl);
        }

        display.value = ergebnis;
    }
}
