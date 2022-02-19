/* eslint-disable no-param-reassign */
export {};

const leftColor = '#f39b00';
const rightColor = '#4e4d4d41';

const rangeElList = document.querySelectorAll('.js-range');

const inRange = document.querySelector('.js-in-range') as HTMLInputElement;
const outRange = document.querySelector('.js-out-range') as HTMLInputElement;
const deliveryRange = document.querySelector(
  '.js-delivery-range',
) as HTMLInputElement;

const resultLabelListEl = document.querySelectorAll('.js-calc-result');

let result: number;

let personCurrentStep = 2;
let adultsCurrentStep = 2;
let kidsCurrentStep = 2;

const calcResult = () => {
  result = (Number(inRange.value) * 4500
      + Number(outRange.value) * 10500
      + Number(deliveryRange.value) * 4500)
    * 0.1;
  resultLabelListEl.forEach(resultLabelEl => {
    resultLabelEl.textContent = result.toLocaleString();
  });
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

inRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  personCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

outRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  adultsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

deliveryRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  kidsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
