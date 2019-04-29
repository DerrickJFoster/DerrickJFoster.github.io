console.log($);

const $container = $('#container')
const makeBoxes = () =>{
  for (var i = 0; i < 100; i++) {
    const $characterBoxes = $('<div>').addClass('boxes').appendTo('div.container')
    console.log($characterBoxes);

  }
}

const test = () =>{
  let $testie = $('<div>').addClass('TEST').appendTo("div.container")
}

$(()=>{
  makeBoxes();
  test()
})
