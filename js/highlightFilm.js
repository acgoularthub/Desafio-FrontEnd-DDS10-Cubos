const highlightVideo = document.querySelector(".highlight__video");
const highlightVideoLink = document.querySelector(".highlight__video-link");
const highlightTitle = document.querySelector(".highlight__title");
const highlightRating = document.querySelector(".highlight__rating");
const highlightGenres = document.querySelector(".highlight__genres");
const highlightLaunch = document.querySelector(".highlight__launch");
const highlightDescription = document.querySelector(".highlight__description");

const highlightBase = '/movie/436969?language=pt-BR';
const highlightVideoBase = '/movie/436969/videos?language=pt-BR';

async function getHighlight() {
  try {
    const response = await api.get(highlightBase);

    highlightVideo.style.backgroundImage = `url(${response.data.backdrop_path})`;
    highlightTitle.innerHTML = response.data.title;
    highlightRating.innerHTML = response.data.vote_average.toFixed(1);
    highlightDescription.innerHTML = response.data.overview;

    const genres = [];
    for (let item of response.data.genres) {
    genres.push(item.name);
    highlightGenres.innerHTML = genres.join(", ");
    }

    highlightLaunch.textContent = new Date(response.data.release_date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  } catch (error) {
    console.log(error);
  }
} 



async function getHighlightVideo() {
  try {
    const response = await api.get(highlightVideoBase);
    highlightVideoLink.href = `https://www.youtube.com/watch?v=${response.data.results[0].key}`;



  } catch (error) {
    console.log(error);
  }
}

getHighlight();
getHighlightVideo();