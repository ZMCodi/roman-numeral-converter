const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function isInvalidInput () {
    const numInt = parseInt(number.value);
    if (numInt < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return true;
    } else if (!number.value) {
        output.innerText = "Please enter a valid number";
        return true;
    } else if (number.value % 1 != 0 || number.value.includes("e")) {
        output.innerText = "Fuck you man";
        return true;
    } else if (numInt > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return true;
    } else {
        return false;
    }
    
}

let romanNum = "";

function roman(num) {
  
  if (num === 0) {
    return romanNum;
  } else if (num >= 1 && num <= 3) {
    romanNum += "I";
    roman(num - 1);
  } else if (num === 4) {
    romanNum += "IV";
    return romanNum;
  } else if (num >= 5 && num <= 8) {
    romanNum += "V";
    roman(num - 5);
  } else if (num === 9) {
    romanNum += "IX";
    return romanNum;
  } else if (num >= 10 && num <= 39) {
    romanNum += "X";
    roman(num - 10);
  } else if (num >= 40 && num <= 49) {
    romanNum += "XL";
    roman(num - 40);
  } else if (num >= 50 && num <= 89) {
    romanNum += "L";
    roman(num - 50);
  } else if (num >= 90 && num <= 99) {
    romanNum += "XC";
    roman(num - 90);
  } else if (num >= 100 && num <= 399) {
    romanNum += "C";
    roman(num - 100);
  } else if (num >= 400 && num <= 499) {
    romanNum += "CD";
    roman(num - 400);
  } else if (num >= 500 && num <= 899) {
    romanNum += "D";
    roman(num - 500);
  } else if (num >= 900 && num <= 999) {
    romanNum += "CM";
    roman(num - 900);
  }  else if (num >= 1000 && num <= 3999) {
    romanNum += "M";
    roman(num - 1000);
  }
  number.value = "";
  return romanNum;
}

convertBtn.addEventListener("click", () => {
    if (!isInvalidInput()) {
      output.innerText = roman(parseInt(number.value));
      romanNum = "";
    }
    
})

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!isInvalidInput()) {
        output.innerText = roman(parseInt(number.value));
        romanNum = "";
      }
    }

})