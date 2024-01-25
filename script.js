const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// Consumir API
function requestApi(searchTerm) {
  // Query Parameter
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`

  // Fetch método de Requisições
  fetch(url)
    // Promisses
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');

  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultsArtist.classList.remove('hidden');
}

// document.addEventListener('input', function() {}) /* Função anônima */
document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    // Adicionar classe hidden à playlist (main-content.css)
    resultPlaylist.classList.add('hidden');

    // Retirar classe hidden do resultArtist (main-content.css)
    resultsArtist.classList.remove('hidden');

    return;
  }

  requestApi(searchTerm);
}) /* Arrow Function */