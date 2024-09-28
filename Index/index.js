import API from '../API/api.js';
import FormData from '../FormData.js';

const apiBaseUrl = `http://localhost:3000`;
console.log(`API Base URL: ${apiBaseUrl}`);

const api = new API(apiBaseUrl);


const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
const loadingElement = document.getElementById('loading');

const valuePerBedroom = 30000;
const valuePerBathroom = 30000;
const minYear = 1500;
const maxYear = 2024;

const handleSubmit = async (event) => {
  event.preventDefault();

  const address = document.getElementById('address').value;
  const size = document.getElementById('size').value;
  const bedrooms = document.getElementById('bedrooms').value;
  const bathrooms = document.getElementById('bathrooms').value;
  const yearBuilt = document.getElementById('year-built').value;

  if (size <= 0) {
    alert('Property size must be a positive number.');
    return;
  }
  if (bedrooms < 0) {
    alert('Number of bedrooms cannot be negative.');
    return;
  }
  if (bathrooms < 0) {
    alert('Number of bathrooms cannot be negative.');
    return;
  }
  if (yearBuilt < minYear || yearBuilt > maxYear) {
    alert(`Year built must be between ${minYear} and ${maxYear}.`);
    return;
  }

  try {
    loadingElement.style.display = 'block';

    const estimatedValue = calculatePropertyValue(size, bedrooms, bathrooms, yearBuilt);
    console.log('Estimated Property Value: $', estimatedValue);

    displaySubscriptionMessage();

    const formData = new FormData(
      address,
      size,
      bedrooms,
      bathrooms,
      yearBuilt
    );

    const estimate = await api.evaluateProperty(formData);
    console.log(estimate);

    alert('Property value calculated successfully');
  } catch (error) {
    console.error('Failed to calculate property value:', error);
    alert('Thank you, Property value calculated successfully.');
  } finally {
    loadingElement.style.display = 'none';
  }
  window.location.href = `${window.location.origin}/Report/report.html`;
};

const calculatePropertyValue = (size, bedrooms, bathrooms, yearBuilt) => {
  const pricePerSqft = getPricePerSquareFoot(yearBuilt);
  const valueFromSqft = size * pricePerSqft;
  const valueFromBedrooms = bedrooms * valuePerBedroom;
  const valueFromBathrooms = bathrooms * valuePerBathroom;
  const totalValue = valueFromSqft + valueFromBedrooms + valueFromBathrooms;
  return totalValue.toFixed(2);
};

const getPricePerSquareFoot = (yearBuilt) => {
  const priceRange = 900 - 300;
  const yearRange = maxYear - minYear;
  const pricePerSqft = 300 + ((yearBuilt - minYear) / yearRange) * priceRange;
  return pricePerSqft;
};

const displaySubscriptionMessage = () => {
  const resultSection = document.getElementById('result');
  resultSection.innerHTML = `<h3>Please subscribe or contact your agent for more information.</h3>`;
};

const handleClear = (event) => {
  event.preventDefault();
  document.getElementById('property-evaluation-form').reset();
  const resultSection = document.getElementById('result');
  resultSection.innerHTML = '';
};

submitButton.addEventListener('click', handleSubmit);
clearButton.addEventListener('click', handleClear);
