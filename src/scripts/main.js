'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = [...document.querySelectorAll('.population')].map((el) => {
  return el.textContent.trim();
});

const numericValues = populations
  .map((el) => {
    const sanitized = el.replace(/[^0-9.-]/g, '');
    const num = Number(sanitized);

    return !isNaN(num) ? num : null;
  })
  .filter((num) => num !== null);

if (numericValues.length === 0) {
  totalPopulation.textContent = 'No valid data';
  averagePopulation.textContent = 'No valid data';
  throw new Error('No valid numeric population data found.');
}

const sum = numericValues.reduce((acc, n) => acc + n, 0);
const average = sum / numericValues.length;

const sample = populations.find((el) => /[0-9]/.test(el));
const usesComma = sample.includes(',');
const separatorLocale = usesComma ? 'en-US' : 'de-DE';

totalPopulation.textContent = sum.toLocaleString(separatorLocale);

averagePopulation.textContent =
  Math.round(average).toLocaleString(separatorLocale);
