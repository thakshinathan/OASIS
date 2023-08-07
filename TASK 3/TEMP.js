function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("temperatureInput").value);
    var inputUnit = document.getElementById("inputUnitSelector").value;
  
    var outputTemp;
    var outputUnit = document.getElementById("unitSelector").value;
  
    switch (inputUnit) {
      case "celsius":
        switch (outputUnit) {
          case "fahrenheit":
            outputTemp = (inputTemp * 9 / 5) + 32;
            break;
          case "kelvin":
            outputTemp = inputTemp + 273.15;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      case "fahrenheit":
        switch (outputUnit) {
          case "celsius":
            outputTemp = (inputTemp - 32) * 5 / 9;
            break;
          case "kelvin":
            outputTemp = (inputTemp + 459.67) * 5 / 9;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      case "kelvin":
        switch (outputUnit) {
          case "celsius":
            outputTemp = inputTemp - 273.15;
            break;
          case "fahrenheit":
            outputTemp = (inputTemp * 9 / 5) - 459.67;
            break;
          default:
            outputTemp = inputTemp;
            break;
        }
        break;
      default:
        outputTemp = inputTemp;
        break;
    }
  
    document.getElementById("result").innerHTML = outputTemp.toFixed(2) + " " + outputUnit;
  }
  
  document.getElementById("convertButton").addEventListener("click", convertTemperature);