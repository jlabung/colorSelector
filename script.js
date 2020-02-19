"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  //document.querySelector("body").style.backgroundColor = rgb2Hsl(210, 23, 34);

  document.querySelector("#colorSelected").addEventListener("change", getColor);
}

function getColor() {
  console.log("getColor");
  let HEX = this.value;
  document.querySelector(".HEX").textContent = HEX;
  let r = Number.parseInt(HEX.substring(1, 3), 16);
  let g = Number.parseInt(HEX.substring(3, 5), 16);
  let b = Number.parseInt(HEX.substring(5, 7), 16);
  let returnValue = `RGB:(${r},${g},${b})`;
  document.querySelector(".RGB").textContent = returnValue;
}
document.querySelector("input").addEventListener("input", rgb2Hsl);

function rgb2Hsl(r, g, b) {
  r = 255;
  g = 255;
  b = 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  const HSL = `HSL :(${h},${s},${l})`;
  document.querySelector(".HSL").textContent = HSL;
  //console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  return HSL;
}
