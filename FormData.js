export default class FormData {
    address;
    propertySqft;
    numBedrooms;
    numBathrooms;
    yearBuilt;

    constructor(address, propertySqft, numBedrooms, numBathrooms, yearBuilt) {
        this.address = address;
        this.propertySqft = propertySqft;
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;
        this.yearBuilt = yearBuilt;
    }

    getAddress() {
        return this.address;
    }

    getPropertySqft() {
        return this.propertySqft;
    }

    getNumBedrooms() {
        return this.numBedrooms;
    }

    getNumBathrooms() {
        return this.numBathrooms;
    }

    getYearBuilt() {
        return this.yearBuilt;
    }
}