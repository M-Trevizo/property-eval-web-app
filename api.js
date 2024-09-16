export default class API {

    // Fetch some data from the API
    async fetchData() {

        const init = {
            method: 'GET',
        }

        try {
            const response = await fetch(API_URL, init);
            if(response.ok) {
                const json = await response.json();

                // Imagine this returns the required information from the JSON response
                return json.data;
            }
        }
        catch(err) {
            console.log(err);
        }

    }

}