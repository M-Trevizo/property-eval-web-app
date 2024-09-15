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
}