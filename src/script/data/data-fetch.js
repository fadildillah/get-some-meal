class DataFetch {
    
    static searchMeal(keyword) {

        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(resJson => {
                if(resJson.meals && keyword !== "" || null) {
                    return Promise.resolve(resJson.meals);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            })
    }
}

export default DataFetch;