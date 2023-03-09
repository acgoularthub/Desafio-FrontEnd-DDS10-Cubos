const input = document.querySelector(".input");

let search = [];

async function getSearch() {
  try {

    const searchBase = `/search/movie?language=pt-BR&include_adult=false&query=${search}`;
    const response = await api.get(searchBase);
    fillCarousel(currentPage, response.data.results);
    
  } catch (error) {

    console.log(error);

  }
}

input.addEventListener("keydown", (event) => {

  if (event.key !== "Enter") {
    return;
  }

  const searching = input.value;

  if (!searching && event.key === "Enter") {
    const displayMovies = document.querySelectorAll(".movie");
    for (let item of displayMovies) item.remove();
    getMovies();
    search = [];
    return;
  } else {
    const displayMovies = document.querySelectorAll(".movie");
  for (let item of displayMovies) item.remove();

  
  search = searching;
  
  }

  getSearch();
  input.value = "";  
});