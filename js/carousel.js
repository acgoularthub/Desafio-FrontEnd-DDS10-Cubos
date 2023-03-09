const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const moviesSection = document.querySelector(".movies");

const initialCarousel = '/discover/movie?language=pt-BR&include_adult=false';

let currentPage = 1;
const maxPages = 3;
const maxIndex = 18;

function goThroughList(initialIndex, maxIndex, data) {
  for (let index = initialIndex; index < maxIndex; index++) {
    
    if (!data[index]) return;

    const divFilms = document.createElement("div");
    divFilms.classList.add("movie");
    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie__info");
    const movieTitle = document.createElement("span");
    movieTitle.classList.add("movie__title");
    const movieRating = document.createElement("span");
    movieRating.classList.add("movie__rating");
    const img = document.createElement("img");

    divFilms.style.backgroundImage = `url(${data[index].poster_path})`;
    movieTitle.innerHTML = data[index].title;
    movieRating.innerHTML = data[index].vote_average;
    img.src = "./assets/estrela.svg";
    img.alt = "Estrela";

    movieRating.append(img);
    movieInfo.append(movieTitle, movieRating);
    divFilms.append(movieInfo);
    moviesSection.append(divFilms);

    divFilms.addEventListener("click", () => {
      modalLoad(data[index].id);
    } );
  }
}

function fillCarousel(currentPage, data) {
  
  if (currentPage === 1) {
    goThroughList(0, 6, data);
  }
  if (currentPage === 2) {
    goThroughList(6, 12, data);
  }

  if (currentPage === 3) {
    goThroughList(12, 18, data);
  }  
}

async function getMovies() {
  try {
    const response = await api.get(initialCarousel);
    fillCarousel(currentPage, response.data.results);
  } catch (error) {
    console.log(error);
  }
}
getMovies();

btnNext.addEventListener("click", () => {
  if (currentPage < maxPages) {
    currentPage++;
    moviesSection.innerHTML = "";
    if (!search[0]) {
      getMovies();
    } else {
      getSearch();
    }
  } else {
    currentPage = 1;
    moviesSection.innerHTML = "";
    if (!search[0]) {
      getMovies();
    } else {
      getSearch();
    }
  } 
});

btnPrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    moviesSection.innerHTML = "";
    if (!search[0]) {
      getMovies();
    } else {
      getSearch();
    }
  } else {
    currentPage = maxPages;
    moviesSection.innerHTML = "";
    if (!search[0]) {
      getMovies();
    } else {
      getSearch();
    }
  }
} ); 
