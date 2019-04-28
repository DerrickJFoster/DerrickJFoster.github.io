console.log($);

const $container = $('#container')
const makeBoxes = () =>{
  for (var i = 0; i < 5; i++) {
    const $characterBoxes = $('<div>')
    console.log(i);
    $('container').append($characterBoxes[i])

  }
}


$(()=>{
  makeBoxes();
})
