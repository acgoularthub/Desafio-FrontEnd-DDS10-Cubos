const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const modalImage = document.querySelector(".modal__img");
const modalDescription = document.querySelector(".modal__description");
const modalAverage = document.querySelector(".modal__average");
const modalGenres = document.querySelector(".modal__genres");
const modalClose = document.querySelector(".modal__close");


function modalLoad(id){  
  modal.classList.remove("hidden");

  const modalBase = `/movie/${id}?language=pt-BR`;

  function generateGeres(data){
      

      for (let item of data.genres) {
        const modalGenre = document.createElement("span");
        modalGenre.classList.add("modal__genre");
        modalGenre.textContent = item.name;
        modalGenres.append(modalGenre);
      }
  }

  async function getModal() {
    try {
      const response = await api.get(modalBase);
      modalTitle.textContent = response.data.title;
      modalImage.src = response.data.backdrop_path;
      modalImage.alt = "poster do filme";
      modalDescription.textContent = response.data.overview;
      modalAverage.textContent = response.data.vote_average.toFixed(1);

      const genresList = document.querySelectorAll(".modal__genre");
      for (const item of genresList) {
        item.remove();
      }
      generateGeres(response.data);


    } catch (error) {
      console.log(error);
    }
  } 
  getModal();

}

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});