// Author: Brodie Lewis
// Date: August 25, 2024
// MADD Level 1 - 2 Debrief

function init() {
  console.log("app is running");

  // Initialize event listeners for both forms
  document
    .getElementById("conversionForm")
    .addEventListener("submit", handleSpeedConversion);
  document
    .getElementById("lengthConversionForm")
    .addEventListener("submit", handleLengthConversion);
  document.getElementById("fx").addEventListener("submit", handleFX);
}

function convertMPHToKMH(mph = 0, conversionFactor = 1.60934) {
  let convertSpeedToKMH = mph * conversionFactor;
  return Math.floor(convertSpeedToKMH);
}

function convertKMHToMPH(kmh = 0, conversionFactor = 1.60934) {
  let convertSpeedToMPH = kmh / conversionFactor;
  return Math.floor(convertSpeedToMPH);
}

function convertFXUSD(USD = 0, fxFactor = 1.337) {
  let convertMoneyToCAD = USD * fxFactor;
  return convertMoneyToCAD;
}

function convertFXCAD(CAD = 0, fxFactor = 1.337) {
  let convertMoneyToUSD = CAD / fxFactor;
  return convertMoneyToUSD;
}

function handleSpeedConversion(ev) {
  ev.preventDefault();

  // Get input values
  const kmhInput = parseFloat(document.getElementById("kmh").value);
  const mphInput = parseFloat(document.getElementById("mph").value);

  // Check if the KMH field is filled to convert to MPH
  if (!isNaN(kmhInput)) {
    const mph = convertKMHToMPH(kmhInput);
    document.getElementById("mph").value = mph;
  }

  // Check if the MPH field is filled to convert to KMH
  if (!isNaN(mphInput)) {
    const kmh = convertMPHToKMH(mphInput);
    document.getElementById("kmh").value = kmh;
  }
}

let conversionFactorYardsToFeet = 3;

let yardsToFeet = (yards = 0, conversionFactorYardsToFeet = 3) => {
  return yards * conversionFactorYardsToFeet;
};

let feetToYards = (feet = 0, conversionFactorYardsToFeet = 3) => {
  return feet / conversionFactorYardsToFeet;
};

function handleLengthConversion(ev) {
  ev.preventDefault();

  // Get selected conversion type and input length
  const conversionType = document.getElementById("conversionLength").value;
  const inputLength = parseFloat(document.getElementById("inputLength").value);

  let convertedLength = 0;

  if (conversionType === "yards-feet") {
    convertedLength = yardsToFeet(inputLength, conversionFactorYardsToFeet);
  } else if (conversionType === "feet-yards") {
    convertedLength = feetToYards(inputLength, conversionFactorYardsToFeet);
  }

  // Set the converted length in the output field
  document.getElementById("outputLength").value = convertedLength;
}

function handleFX(ev) {
  ev.preventDefault();

  let fxType = document.getElementById("fxConversion").value;
  let fxInput = parseFloat(document.getElementById("inputcad").value);
  let convertedAmount = 0;

  if (fxType === "cadTOusd") {
    convertedAmount = convertFXUSD(fxInput);
  } else if (fxType === "usdTOcad") {
    convertedAmount = convertFXCAD(fxInput);
  }

  document.getElementById("inputusd").value = convertedAmount;
}

document.addEventListener("DOMContentLoaded", init);
