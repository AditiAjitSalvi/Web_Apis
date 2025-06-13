document.getElementById('animeForm').addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
  const birthdate = document.getElementById('birthdate').value;
  const result = document.getElementById('result');
  const image = document.getElementById('charImage');

    if(!gender || !birthdate) return;

    try{
        const res= await fetch(`https://api.waifu.pics/sfw/${gender}`);
        //https://pokeapi.co/api/v2/gender/{gender_id}
//https://pokeapi.co/api/v2/gender/{gender_id}

        const data = await res.json();
        
        image.src = data.url;
        result.classList.remove('hidden');
    }
    catch(error) {
        alert("Error fetching character image. Please try again.");
        console.error("Error:", error);
    }
});