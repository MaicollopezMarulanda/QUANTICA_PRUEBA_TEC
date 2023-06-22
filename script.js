// const input = document.querySelector('#searchInput');
// console.log(input);

// //CAPTURAR LOS EVENTOS
// window.addEventListener('DOMContentLoaded',()=>{
//     console.log("ESTO SE CARGO ENEL EVENTO LOADED");
// });

// //KEYUP MUESTRA LA INFORMACION QUE  ESTA TIPIANDO.
// input.addEventListener('keyup', e=>{
//     console.log(e);
// });

function consumirservicio(){
  let link = 'https://6454ff2ea74f994b334eff5e.mockapi.io/channels';
    fetch(link)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

  const mostrarData = (data) => {
    console.log(data);
    console.log(typeof data);
    let body = "";
    for (let i = 0; i < data.length; i++) {
      body += `<tr><td>${data[i].Title}</td><td>${data[i].ID}</td><td>${data[i].Description}</td><td>${data[i].StreamFormat}</td><td>${data[i].Background}</td>
      <td>${data[i].Poster}</td><td>${data[i].URl}</td><td>${data[i].GUID}</td><td>${data[i].Category}</td><td>${data[i]["Tags"]}</td><tr>`
    }
    document.getElementById('data').innerHTML = body;
  }
}

function filtrar(){
  let link = 'https://6454ff2ea74f994b334eff5e.mockapi.io/channels';
    fetch(link)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

  const mostrarData = (data) => {    
    const va = document.getElementById('buscartitulo');    
    console.log(data);
    console.log(typeof data);
    console.log(va.value);

    let body = "";
    for (let i = 0; i < data.length; i++) {
      if(data[i].Title.toLowerCase().includes(va.value.toLowerCase())){
        body += `<tr><td>${data[i].Title}</td><td>${data[i].ID}</td><td>${data[i].Description}</td><td>${data[i].StreamFormat}</td><td>${data[i].Background}</td>
        <td>${data[i].Poster}</td><td>${data[i].URl}</td><td>${data[i].GUID}</td><td>${data[i].Category}</td><td>${data[i]["Tags"]}</td><tr>`
      }
    }
    document.getElementById('data').innerHTML = body;
  }
}

function filtrardos(){
  let link = 'https://6454ff2ea74f994b334eff5e.mockapi.io/channels';
    fetch(link)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

  const mostrarData = (data) => {    
    const porid = document.getElementById('buscarid');
    console.log(data);
    console.log(typeof data);
    console.log(porid.value);

    let body = "";
    for (let i = 0; i < data.length; i++) {
      if(data[i].ID == porid.value){
        body += `<tr><td>${data[i].Title}</td><td>${data[i].ID}</td><td>${data[i].Description}</td><td>${data[i].StreamFormat}</td><td>${data[i].Background}</td>
        <td>${data[i].Poster}</td><td>${data[i].URl}</td><td>${data[i].GUID}</td><td>${data[i].Category}</td><td>${data[i]["Tags"]}</td><tr>`
      }
    }
    document.getElementById('data').innerHTML = body;
  }
}





