fetch('https://api.giphy.com/v1/gifs/random?api_key=Cv0JOoTfMScNpZjJEwScLf8Ger1wmkm9&tag=cat&rating=g')
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
   console.log(jsonData);
   var gifUrl = jsonData.data.images.original.url; // Use gifUrl consistently
   console.log(gifUrl);

   var gif = document.createElement('img');
   gif.setAttribute('src', gifUrl);
   document.body.appendChild(gif);
});
