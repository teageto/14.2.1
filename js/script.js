addEventListener("DOMContentLoaded", ()=>{
   const URL = 'https://japceibal.github.io/japflix_api/movies-data.json'

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let arrayPelis = data;
    let dataContainer = document.getElementById('container');
    
  })
})