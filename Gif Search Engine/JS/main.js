let search = document.querySelector("#searchBar");
let input = document.querySelector("#button");
input.addEventListener("click", function (event) {
    event.preventDefault();
    //calling the clearImageResults function
    clearImageResults();

    //fetching the api
    const host = "http://api.giphy.com/v1";
    const query = `${search.value}`
    const apiKey = 'OBqiOinMGeKhOD3LT6y8Odp6DZC4jOjc'
    const newAPI = `${host}/gifs/search?q=${query}&api_key=${apiKey}&limit=3`;
    async function getGif() {
        let response = await fetch(newAPI);
        if (response.status == 200) {
            let json = await response.json();

            //this returns json
            for (let i = 0; i < json.data.length; i++) {

                console.log(json.data[i].images.original.url);
                let img = document.createElement('img');
                img.src = json.data[i].images.original.url;
                let di = document.querySelector('#imageResult');
                di.appendChild(img);
            }
          
        }
        
    }
    //This function clears previous search results
    function clearImageResults() {
        const resultsDiv = document.querySelector('#imageResult');
        resultsDiv.innerHTML = '';
    };
    getGif();
});
