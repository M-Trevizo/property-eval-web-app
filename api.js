export default class API {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async evaluateProperty(data) {
      try {
        const response = await fetch(`${this.baseUrl}/evaluate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Failed to evaluate property');
        }
  
        return await response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
}
