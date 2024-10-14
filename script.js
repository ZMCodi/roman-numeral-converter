const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function checkInput () {
    numInt = parseInt(number.value);
    if (numInt < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (!number.value) {
        output.innerText = "Please enter a valid number";
    } else if (number.value % 1 != 0 || number.value.includes("e")) {
        output.innerText = "Fuck you man";
    } else if (numInt > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    number.value = "";
}

convertBtn.addEventListener("click", () => {
    checkInput();
    
})

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
})

//the actual code
function convertToRoman() {}