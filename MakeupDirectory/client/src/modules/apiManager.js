const ApiKey = process.env.REACT_APP_SEPHORA_API_KEY;



export const ObjectFromAPI = () => {
    return fetch("https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=15&currentPage=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${ApiKey}`,
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then(function (response) {
            return response.products
        })
        .catch(err => {
            console.error(err);
        });
}


export const searchForProduct = (search) => {
    return fetch(`https://sephora.p.rapidapi.com/products/search?q=${search}&pageSize=60&currentPage=1`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${ApiKey}`,
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then(function (response) {
            // console.log(response)
            return response.products
        })
        .catch(err => {
            console.error(err);
        });

}
