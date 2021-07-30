
export const searchForProduct = (search) => {
    fetch(`https://sephora.p.rapidapi.com/products/search?q=${search}&pageSize=60&currentPage=1`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

}

export const foundationList = () => {
    fetch("https://sephora.p.rapidapi.com/products/search?q=foundation&pageSize=60&currentPage=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}


export const eyeshadows = () => {
    fetch("https://sephora.p.rapidapi.com/auto-complete?q=eyeshadows", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "361ce85ba0msh0064549f99dac2dp10889ajsn58e351ccd3c9",
            "x-rapidapi-host": "sephora.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}