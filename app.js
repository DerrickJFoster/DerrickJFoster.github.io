console.log($);

const baseURL = `https://gateway.marvel.com:443/v1/public/characters?`
let ts = `ts=1`
const publicKey = `apikey=b838fe84e1736b52702b1c6cc30a90ed`;
const privateKey = `94bb7a78e50a9bb81db19ce1b16b9f74fabe45e9`;

let hash = `hash=e8eb73afeeed73e477a5c76650af0e4a`
let queryType = `limit=100`

const apiURL = baseURL + ts + '&' + publicKey+ '&' + queryType + '&' + hash

//hash must = md5 of ts= + private + public

// const getInfo = ()=>{
//   $.ajax({
//     url: apiURL
//   }).then((data) =>{
//     $('div.boxes').html(`
//       <img src="${data.data.results[0].thumbnail.path}/portrait_small.${data.data.results[0].thumbnail.extension}" alt="spidey">
//       <h6>${data.data.results[0].name}
//     `)
//   }, (error) => {
//     console.log(error);
//   })
// }
  // let queryType = `limit= ${document.getElementById('text').value}`
  // apiURL();

const getInfo = () =>{
  $.ajax({
    url: apiURL
  }).then((data) =>{
      for (var i = 0; i < 10; i++) {
        console.log(data.data.results[i].name);
        makeBoxes(data.data.results[i])


  }
})
}

// $('div.boxes').html(`
// <img src="${data.data.results[i].thumbnail.path}/portrait_small.${data.data.results[i].thumbnail.extension}" alt="">
// <h6>${data.data.results[i].name}</h6>
// `)

const $container = $('#container')

const makeBoxes = (character) =>{
  console.log(character);

 $('<div>').addClass('boxes').html(`
 <img src="${character.thumbnail.path}/portrait_small.${character.thumbnail.extension}" alt="">
 <h6>${character.name}</h6>
 `).appendTo('div.container')
}




$(()=>{
  // makeBoxes();
  getInfo();
})
