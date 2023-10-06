document.addEventListener("DOMContentLoaded", ()=>{
   const URL = 'https://japceibal.github.io/japflix_api/movies-data.json'

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
          <div class="card text-bg-primary mb-3">
            <div class="card-header">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">Someone famous in </footer>
              </blockquote>
            </div>
          </div>
          `
          dataContainer.appendChild(div);
        } else if(`${item.genres}`.toLowerCase().includes(inptValue)) {
          div.innerHTML = `
          <div class="card text-bg-primary mb-3">
            <div class="card-header">
            ${item.title}
            </div>
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${item.tagline}</p>
                <footer class="blockquote-footer">Someone famous in </footer>
              </blockquote>
            </div>
          </div>
          `
          dataContainer.appendChild(div);
      } else if(`${item.tagline}`.toLowerCase().includes(inptValue)) {
        div.innerHTML = `
        <div class="card text-bg-primary mb-3">
          <div class="card-header">
          ${item.title}
          </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${item.tagline}</p>
              <footer class="blockquote-footer">Someone famous in </footer>
            </blockquote>
          </div>
        </div>
        `
        dataContainer.appendChild(div); 
      } else if(`${item.overview}`.toLowerCase().includes(' '+inptValue+' ')) {
        div.innerHTML = `
        <div class="card text-bg-primary mb-3">
          <div class="card-header">
          ${item.title}
          </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${item.tagline}</p>
              <footer class="blockquote-footer">Someone famous in </footer>
            </blockquote>
          </div>
        </div>
        `
        dataContainer.appendChild(div);
      };
    });
    });
  });
});