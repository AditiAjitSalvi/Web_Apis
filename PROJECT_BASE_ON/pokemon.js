document.getElementById('animeForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const birthdate = document.getElementById('birthdate').value;
  const result = document.getElementById('result');
  const image = document.getElementById('charImage');
  const nameBox = document.getElementById('pokeName'); // Add this

  if (!gender || !birthdate) return;

  try {
    // Fetch the list of Pokémon species based Gender
    const res = await fetch(`https://pokeapi.co/api/v2/gender/${gender}`);
    const data = await res.json();
    const speciesList = data.pokemon_species_details;

    
    const randomSpecies = speciesList[Math.floor(Math.random() * speciesList.length)].pokemon_species.name;
// Fetch a random Pokémon species from the list
    const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomSpecies}`);
    const pokeData = await pokeRes.json();
    const imgUrl = pokeData.sprites.other["official-artwork"].front_default;

    
    image.src = imgUrl;
    nameBox.textContent = randomSpecies.toUpperCase(); // Display the Pokémon name
    result.classList.remove('hidden');
  } catch (error) {
    alert("Error fetching Pokémon image. Please try again.");
    console.error("Error:", error);
  }

});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('gender').value = '';
  document.getElementById('birthdate').value = '';
  document.getElementById('charImage').src = '';
  document.getElementById('pokeName').textContent = '';
  document.getElementById('result').classList.add('hidden');
});
