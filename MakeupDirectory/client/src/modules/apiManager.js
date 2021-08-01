
let apiMakeup = [];


export const getListOfProducts = () => {
    return fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(res => res.json())
}

export const ObjectFromAPI = () => {
    return fetch("https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=25&currentPage=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then(function (response) {
            console.log(response)
            return response.products
        })
        .catch(err => {
            console.error(err);
        });
}
// (response => {
//     response.json.toString(response)
//     console.log(response);
// })
// export const searchForProduct = (search) => {
//     fetch(`https://sephora.p.rapidapi.com/products/search?q=${search}&pageSize=60&currentPage=1`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": settings,
//             "x-rapidapi-host": "sephora.p.rapidapi.com"
//         }
//     })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.error(err);
//         });

// }



export const loadEyeshadows = () => {
    fetch("https://sephora.p.rapidapi.com/auto-complete?q=eyeshadows", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then(response => response.json.toString())
        .then((object) => {
            console.log(object);
            apiMakeup = object
            return object;
        })
        .catch(err => {
            console.error(err);
        });
}