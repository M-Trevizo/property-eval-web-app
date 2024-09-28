import API from '../API/api.js';
import FormData from '../FormData.js'

const apiBaseUrl = `http://localhost:3000`;
const api = new API(apiBaseUrl);

const address = document.getElementById("address");
const estimateText = document.getElementById("estimate");

const data = await api.getFormData();
const formData = new FormData(
    data.address,
    data.propertySqft,
    data.numBedrooms,
    data.numBathrooms,
    data.yearBuilt
);

const estimate = await api.evaluateProperty();

address.innerText = `${formData.address}`;
estimateText.innerText = `\$${estimate}`;
