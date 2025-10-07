/* eslint-disable no-console */
'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populations = [...document.querySelectorAll('.population')].map(
  (el) => el.textContent,
);

console.log(populations);

const sum = populations.reduce((acc, el) => {
  const num = Number(el.replaceAll(',', ''));

  if (!isNaN(num)) {
    return acc + num;
  }

  return acc;
}, 0);

const average = Math.floor(sum / populations.length);

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
