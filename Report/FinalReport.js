import API from "../API/api.js"

const apiBaseUrl = `http://localhost:3000`;
const api = new API(apiBaseUrl);


export default class FinalReport {
    estimate;

    constructor(estimate) {
        this.estimate = estimate;
    }

    getEstimate() {
        return this.estimate;
    }

    async getFormData() {
        return await api.getFormData();
    }
}