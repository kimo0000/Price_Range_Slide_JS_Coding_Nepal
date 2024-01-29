const inputsRange = document.querySelectorAll(".inp_range input"),
  sliderBar = document.querySelector(".slider .bar"),
  inputsNumbers = document.querySelectorAll(".inp input");

// console.log(inputsNumbers);

const priceGap = 1000;

inputsNumbers.forEach((price) => {
  price.addEventListener("input", (e) => {
    let minValue = parseInt(inputsNumbers[0].value);
    let maxValue = parseInt(inputsNumbers[1].value);

    if (maxValue - minValue >= priceGap && maxValue <= inputsRange[0].max) {
      if (e.target.id == "min_range") {
        inputsRange[0].value = minValue;
        sliderBar.style.left = `${parseInt(
          (minValue / inputsRange[0].max) * 100
        )}%`;
      } else {
        inputsRange[1].value = maxValue;
        sliderBar.style.right = `${
          100 - parseInt((maxValue / inputsRange[1].max) * 100)
        }%`;
      }
    }
  });
});

inputsRange.forEach((range) => {
  range.addEventListener("input", (e) => {
    let minValue = parseInt(inputsRange[0].value);
    let maxValue = inputsRange[1].value;

    // console.log(minValue + " => " + maxValue);
    if (maxValue - minValue < priceGap) {
      if (e.target.className == "range_1") {
        inputsRange[0].value = maxValue - priceGap;
      } else {
        inputsRange[1].value = minValue + priceGap;
      }
    } else {
      inputsNumbers[0].value = minValue;
      inputsNumbers[1].value = maxValue;
      sliderBar.style.left = `${parseInt(
        (minValue / inputsRange[0].max) * 100
      )}%`;
      sliderBar.style.right = `${
        100 - parseInt((maxValue / inputsRange[1].max) * 100)
      }%`;
    }
  });
});
