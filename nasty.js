
document.addEventListener('DOMContentLoaded', function(){
  var link = document.getElementsByClassName('link');
  link[0].addEventListener('click', function(){
    this.className = 'border-bottom-red';
  }, false);
}, false);


// $('.slider').sss({
// slideShow : true,
// startOn : 0,
// transition : 400,
// speed : 3500,
// showNav : true
// });
