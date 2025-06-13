//Remember to replace the api key with YOUR api key
//fetch('https://api.giphy.com/v1/gifs/randomm?api_key=Cv0JOoTfMScNpZjJEwScLf8Ger1wmkm9&tag=cat&rating=g')
fetch('https://api.giphy.com/v1/gifs/random?api_key=Cv0JOoTfMScNpZjJEwScLf8Ger1wmkm9&tag=cat&rating=g')

.then(function(response) {
	if(response.status !== 200) {
		console.log('Error: ' + response.status);
		return;
	}
	else{
return response.json();
	}
	
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)

	//Add gif title
	var titleText = jsonData.data.title;
	var title = document.createElement('h3');
	title.innerText = titleText;
	document.body.appendChild(title);
})
.catch(function(error) {
	console.log('Fetch Error: ' + error);
	var errorMessage = document.createElement('p');
	errorMessage.innerText = 'An error occurred while fetching the GIF. Please try again later.';
	document.body.appendChild(errorMessage);
})