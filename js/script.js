const URL = 'https://japceibal.github.io/japflix_api/movies-data.json'


document.addEventListener("DOMContentLoaded", ()=>{

fetch(URL)
  .then(response => response.json())
  .then(data => {
    let arrayPelis = data;
    let dataContainer = document.getElementById('container');
    let btn = document.getElementById('btnBuscar');
    let inp = document.getElementById('inputBuscar');

    btn.addEventListener('click', ()=>{

      dataContainer.innerHTML = '';
      const inptValue = inp.value.toLowerCase();
      let i = 0
    arrayPelis.forEach(item => {

      let div = document.createElement('div');
      div.classList.add('dataItem');
      let starsDom = generateStarRating(item.vote_average)
      let fecha = item.release_date;
      let date = fecha.split('-');
      let YEAR = ""
      if( date.length === 3 ){
         YEAR = date[0]
      }
      
        if(`${item.title}`.toLowerCase().includes(inptValue)) {
          div.innerHTML = `
          <div class="card cardpeli">
            <div class="card-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop${i}" aria-controls="offcanvasTop">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">${starsDom}</footer>
              </blockquote>

              <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop${i}" aria-labelledby="offcanvasLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">${item.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>${item.overview}</p>
                  </blockquote>
                  <hr>
                  <figcaption class="blockquote-footer">
                    ${item.genres[0].name} - ${item.genres[1].name} - ${item.genres[2].name}
                    <div class="btn-group ">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                      More Info
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Year: ${YEAR}</a></li>
                      <li><a  class="dropdown-item">Runtime: ${item.runtime} mins</a></li>
                      <li><a class="dropdown-item">Budget: ${item.budget}</a></li>
                      <li><a class="dropdown-item">Revenue: ${item.revenue}</a></li>
                    </ul>
                  </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            </div>
          </div>
          `;
          dataContainer.appendChild(div);
          i++
        } else if(`${item.genres}`.toLowerCase().includes(inptValue)) {
          div.innerHTML = `
          <div class="card cardpeli">
            <div class="card-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop${i}" aria-controls="offcanvasTop">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">${starsDom}</footer>
              </blockquote>

              <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop${i}" aria-labelledby="offcanvasLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">${item.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>${item.overview}</p>
                  </blockquote>
                  <hr>
                  <figcaption class="blockquote-footer">
                    ${item.genres[0].name} - ${item.genres[1].name} - ${item.genres[2].name}
                    <div class="btn-group ">
                      <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                        More Info
                      </button>
                      <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><a class="dropdown-item" >Year: ${YEAR}</a></li>
                        <li><a class="dropdown-item" >Runtime: ${item.runtime} mins</a></li>
                        <li><a class="dropdown-item" >Budget: ${item.budget}</a></li>
                        <li><a class="dropdown-item">Revenue: ${item.revenue}</a></li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            </div>
          </div>
          `;
          dataContainer.appendChild(div);
          i++
      } else if(`${item.tagline}`.toLowerCase().includes(inptValue)) {
        div.innerHTML = `
        <div class="card cardpeli">
        <div class="card-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop${i}" aria-controls="offcanvasTop">
        ${item.title}
        </div>
          <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${item.tagline}</p>
            <footer class="blockquote-footer">${starsDom}</footer>
          </blockquote>

          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop${i}" aria-labelledby="offcanvasLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">${item.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <figure>
              <blockquote class="blockquote">
                <p>${item.overview}</p>
              </blockquote>
              <hr>
              <figcaption class="blockquote-footer">
                ${item.genres[0].name} - ${item.genres[1].name} - ${item.genres[2].name}
                <div class="btn-group ">
                  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="true">
                    More Info
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item">Year:    ${YEAR}</a></li>
                    <li><a class="dropdown-item">Runtime: ${item.runtime} mins</a></li>
                    <li><a class="dropdown-item">Budget: ${item.budget}</a></li>
                    <li><a class="dropdown-item">Revenue: ${item.revenue}</a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
      </div>
        `;
        dataContainer.appendChild(div); 
        i++
      } else if(`${item.overview}`.toLowerCase().includes(' '+inptValue+' ')) {
        div.innerHTML = `
        <div class="card cardpeli">
        <div class="card-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop${i}" aria-controls="offcanvasTop">
        ${item.title}
        </div>
          <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${item.tagline}</p>
            <footer class="blockquote-footer">${starsDom}</footer>
          </blockquote>

          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop${i}" aria-labelledby="offcanvasLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">${item.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <figure>
              <blockquote class="blockquote">
                <p>${item.overview}</p>
              </blockquote>
              <hr>
              <figcaption class="blockquote-footer">
                ${item.genres[0].name} - ${item.genres[1].name} - ${item.genres[2].name}
                <div class="btn-group ">
                  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                    More Info
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item"  >Year:    ${YEAR}</a></li>
                    <li><a class="dropdown-item" >Runtime: ${item.runtime} mins</a></li>
                    <li><a class="dropdown-item" >Budget: ${item.budget}</a></li>
                    <li><a class="dropdown-item" >Revenue: ${item.revenue}</a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
      </div>
        `;
        dataContainer.appendChild(div);
        i++
      };
    });
    });
  });
});

function generateStarRating(voteAverage) {
  const maxStars = 5; // Cantidad máxima de estrellas
  const rating = Math.min(Math.max(voteAverage / 2, 0), maxStars); // Asegura que la valoración esté entre 0 y 5
  let starsDom = "";
  for (let i = 0; i < maxStars; i++) {
    const starClass = i < rating ? "checked" : "";
    starsDom += `<span class="fa fa-star ${starClass}"></span>`;
  }
  return starsDom;
}