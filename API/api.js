export default class API {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async evaluateProperty() {
      try {
        const response = await fetch(`${this.baseUrl}/homes`, {
          method: 'GET'
        });
  
        if (!response.ok) {
          throw new Error('Failed to evaluate property');
        }

        const json = await response.json();
        const values = this.getValues(json)
        const average = this.calcAverage(values);

        return average;

      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }

    async postFormData(data) {
        try {
            const response = await fetch(`${this.baseUrl}/formData`, {
                method: 'PUT',
                contentType: 'application/json',
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const json = await response.json();
                console.log(json);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    async getFormData() {
        try {
            const response = await fetch(`${this.baseUrl}/formData`, {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    // Parse the values returned from our fake API
    getValues(homeData) {
      const values = [];
      for(let home of homeData) {
        const value = Number.parseInt(home.value);
        values.push(value);
      }
      return values;
    }

    // Calculate average from array
    calcAverage(values) {
      let sum = 0;
      let count = 0;
      for(let value of values) {
        sum += value;
        count++;
      }
      return Math.round(sum / count);
    }
}
