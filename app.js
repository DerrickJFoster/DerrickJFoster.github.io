console.log($);

const baseURL = `https://gateway.marvel.com:443/v1/public/characters?`
let ts = `ts=1`
const publicKey = `apikey=b838fe84e1736b52702b1c6cc30a90ed`;
const privateKey = `94bb7a78e50a9bb81db19ce1b16b9f74fabe45e9`;

let hash = `hash=e8eb73afeeed73e477a5c76650af0e4a`
let queryType = `nameStartsWith=`

let apiURL = baseURL + ts + '&' + publicKey + '&' + hash

//hash must = md5 of ts= + private + public

const $container = $('#container')
const makeBoxes = () =>{
  for (var i = 0; i <= 100; i++) {
    const $characterBoxes = $('<div>').addClass('boxes').appendTo('div.container')
    console.log($characterBoxes[i]);

  }
}
// test appendTo
// const test = () =>{
//   let $testie = $('<div>').addClass('TEST').appendTo("div.container")
// }

$(()=>{
  makeBoxes();
  // test();
console.log(apiURL);
})
