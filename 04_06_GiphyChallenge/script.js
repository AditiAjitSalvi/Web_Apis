fetch('https://api.giphy.com/v1/gifs/random?api_key=Cv0JOoTfMScNpZjJEwScLf8Ger1wmkm9&tag=sea+otter&rating=g')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)

	var titleText = jsonData.data.title;
	var title = document.createElement('h3');
	title.innerText = titleText;
	document.body.appendChild(title);
})