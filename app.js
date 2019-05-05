console.log($);
const baseURL = `https://gateway.marvel.com:443/v1/public/characters?`
let ts = `ts=1`
const publicKey = `apikey=b838fe84e1736b52702b1c6cc30a90ed`;
const privateKey = `94bb7a78e50a9bb81db19ce1b16b9f74fabe45e9`;

let hash = `hash=e8eb73afeeed73e477a5c76650af0e4a`
let queryType = `limit=100`

const apiURL = baseURL + ts + '&' + publicKey+ '&' + queryType + '&' + hash

//hash must = md5 of ts= + private + public
console.log(apiURL);

const getInfo = () =>{
  $.ajax({
    url: apiURL
  }).then((data) =>{
      for (var i = 0; i < 100; i++) {
        // console.log(data.data.results[i].name);
        makeBoxes(data.data.results[i])
  }
})
}


const $container = $('#container')

const makeBoxes = (character) =>{
    // console.log(character.series);

   $('<div>').addClass('boxes').html(`
   <img id='characterPic' src="${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}" alt="">

   <h4 class='name'>${character.name}</h4>

   <p class='info'>
   BIO:<br>${character.description}
   <br>
   Times appeared in Film: ${character.series.available}
   </p>

   `).appendTo('div.container')
}
// FILMS:<br>${character.series[0].name}
const helpMe = ()=>{
  alert('"Good day sir! It seems that you need some navigation guidance and I am here to help, Mr. Stark directed me to inform you that this site is very simple, all you must do is hover your mouse over any character that you desire to read more about and said information will pop up right on your screen! Give it a go why don\'t you."―J.A.R.V.I.S.')
}

const fullScreen = ()=> {
  console.log('clicked');
  let hidden1 = document.getElementById("characterList");
  let hidden2 = document.getElementById("divider")
  let hidden3 = document.getElementById("topNav")
  let hidden4 = document.getElementById("button2")
  if (hidden1.style.display === "none") {
    hidden1.style.display = "block";
    hidden2.style.display = "block";
    hidden3.style.display = "block";
    hidden4.style.margin = "0";
  } else {
    hidden1.style.display = "none";
    hidden2.style.display = "none";
    hidden3.style.display = "none";
    hidden4.style.margin = "auto";
  }
}

$(()=>{
  getInfo();
  $('#button1').click(helpMe)
  $('#button2').click(fullScreen)
})
