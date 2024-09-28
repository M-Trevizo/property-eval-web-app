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

    setAddress(address) {
        this.address = address;
    }

    getPropertySqft() {
        return this.propertySqft;
    }

    setPropertySqft(propertySqft) {
        this.propertySqft = propertySqft;
    }

    getNumBedrooms() {
        return this.numBedrooms;
    }

    setNumBedrooms(numBedrooms) {
        this.numBedrooms = numBedrooms;
    }

    getNumBathrooms() {
        return this.numBathrooms;
    }

    setNumBathrooms(numBathrooms) {
        this.numBathrooms = numBathrooms;
    }

    getYearBuilt() {
        return this.yearBuilt;
    }

    setYearBuilt(yearBuilt) {
        this.yearBuilt = yearBuilt;
    }
}