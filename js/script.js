const URL = 'https://japceibal.github.io/japflix_api/movies-data.json'

document.addEventListener("DOMContentLoaded", ()=>{

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let arrayPelis = data;
    let dataContainer = document.getElementById('container');
    let btn = document.getElementById('btnBuscar');
    let inp = document.getElementById('inputBuscar');

    btn.addEventListener('click', ()=>{

      dataContainer.innerHTML = '';
      const inptValue = inp.value.toLowerCase();

    arrayPelis.forEach(item => {
      let div = document.createElement('div');
      div.classList.add('dataItem');
        if(`${item.title}`.toLowerCase().includes(inptValue)) {
          div.innerHTML = `
          <div class="card">
            <div class="card-header">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">${item.vote_average}</footer>
              </blockquote>
              <button class="btn btn-secondary float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">More Info</button>
              <div class="offcanvas offcanvas-top text-bg-light p-3" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="color: rgb(rgb(29, 29, 29));">
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasTopLabel">${item.title}</h2>
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
                  </figcaption>
                </figure>
                <button type="button" class="btn btn-secondary float-end" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                  Popover on bottom
                </button>
            </div>
            </div>
          </div>
          `;
          dataContainer.appendChild(div);
        } else if(`${item.genres}`.toLowerCase().includes(inptValue)) {
          div.innerHTML = `
          <div class="card">
            <div class="card-header">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">${item.vote_average}</footer>
              </blockquote>
              <button class="btn btn-secondary float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">More Info</button>
              <div class="offcanvas offcanvas-top text-bg-light p-3" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="color: rgb(rgb(29, 29, 29));">
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasTopLabel">${item.title}</h2>
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
                  </figcaption>
                </figure>
                <button type="button" class="btn btn-secondary float-end" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                 Popover on bottom
                </button>
            </div>
            </div>
          </div>
          `;
          dataContainer.appendChild(div);
      } else if(`${item.tagline}`.toLowerCase().includes(inptValue)) {
        div.innerHTML = `
        <div class="card">
          <div class="card-header">
          ${item.title}
          </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${item.tagline}</p>
              <footer class="blockquote-footer">${item.vote_average}</footer>
            </blockquote>
            <button class="btn btn-secondary float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">More Info</button>
            <div class="offcanvas offcanvas-top text-bg-light p-3" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="color: rgb(rgb(29, 29, 29));">
              <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasTopLabel">${item.title}</h2>
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
                </figcaption>
              </figure>
              <button type="button" class="btn btn-secondary float-end" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                Popover on bottom
              </button>
            </div>
          </div>
        </div>
        `;
        dataContainer.appendChild(div); 
      } else if(`${item.overview}`.toLowerCase().includes(' '+inptValue+' ')) {
        div.innerHTML = `
        <div class="card">
          <div class="card-header">
          ${item.title}
          </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${item.tagline}</p>
              <footer class="blockquote-footer">${item.vote_average}</footer>
            </blockquote>
            <button class="btn btn-secondary float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">More Info</button>
            <div class="offcanvas offcanvas-top text-bg-light p-3" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <h2class="offcanvas-title" id="offcanvasTopLabel">${item.title}</h2>
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
                </figcaption>
              </figure>
              <button type="button" class="btn btn-secondary float-end" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                Popover on bottom
              </button>
            </div>
          </div>
        </div>
        `;
        dataContainer.appendChild(div);
      };
    });
    
    });
  });
});



