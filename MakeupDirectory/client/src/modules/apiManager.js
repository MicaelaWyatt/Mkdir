

export const ObjectFromAPI = () => {
    return fetch("https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=15&currentPage=1", {
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

// export const productFromSearchById = (search, productId) => {
//     return fetch(`https://sephora.p.rapidapi.com/products/search?q=${search}&pageSize=60&currentPage=1`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
//             "x-rapidapi-host": "sephora.p.rapidapi.com"
//         }
//     })
//         .then((response) => {
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response)
//             return response.products
//         })
//         .then(function findProductById(array,key,value){
//             for (var i = 0; i < array.length; i++){
//                 if (array[i][key] === value) {
//                     return array[i]
//                 }
//             }
//             return null
//         })
//         .catch(err => {
//             console.error(err);
//         });

// }

