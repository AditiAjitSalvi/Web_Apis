fetch("https://swapi-graphql.netlify.app/graphql?query={allFilms{films{title}}}")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData)
})