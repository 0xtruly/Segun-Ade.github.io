let search = document.querySelector("#searchBar");
let input = document.querySelector("#button");
input.addEventListener("submit", event => {
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

// (function(){
//     const host = 'https://api.giphy.com/v1';
//     const apiKey = 'OBqiOinMGeKhOD3LT6y8Odp6DZC4jOjc&limit=12';
//     const search = document.querySelector('#searchBar');
//     const input = document.querySelector('#button');
//     const output = document.querySelector('output');
//     const images = {
//       img0: document.getElementById('img1'),
//       img1: document.getElementById('img2'),
//       img2: document.getElementById('img3'),
//     }
//     input.addEventListener('submit', event => {
//       event.preventDefault();
//       const gif=document.createElement('img')
//       gif.src='../../assets/loading.gif'
//       output.appendChild(gif);
  
//       axios.get(`${host}/gifs/search?q=${search.value}&api_key=${apiKey}&limit=3`)
//       .then(function (response) {
//         // handle success
//         output.textContent = '';
//         console.log(response.json());
//         // response.data.data
//         const { data: { data } } = response;
//         data.forEach((gif, index) => {
//           images[`img${index}`].src = gif.images.original.url;
//         });
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//         output.textContent = error;
//       })
//     });
//   }());