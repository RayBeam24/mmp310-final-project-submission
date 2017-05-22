'use strict';
var i =  0; // start point
var images = [];
var time = 2000;

// images List
images[0] = 'images/advance.jpg';
images[1] = 'images/PS4.jpg';
images[2] = 'images/zelda.jpg';
images[3] = 'images/switch.jpg';

// change images
function changeImg(){
  document.slide.src= images[i];

  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
// accordion
var menuTitles = document.getElementsByClassName('menu-link');

function slideList() {
  var menuList = this.getElementsByClassName('menu-list')[0];
  var menuCSS = window.getComputedStyle(menuList);

  if (menuCSS.height == "0px"){
    for (i = 0; i < 5; i++) {
      menuTitles[i].getElementsByClassName('menu-list')[0].style.height = "0px";
    }

    menuList.style.height = "250px";
  } else {
    menuList.style.height = "0px";
  }
}

for (i=0; i < 5; i++) {
  menuTitles[i].addEventListener('click', slideList);
}
// maps
var map;
function initMap() {
      var bmcc = {lat: 40.717478, lng: -74.012293};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: bmcc
      });
      var marker = new google.maps.Marker({
        position: bmcc,
        map: map
      });
    }
//lightbulb
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.src = "pic_bulbon.gif";
    }
}

//var userNameInput = prompt("What is your name?");
//alert("Hello, " + userNameInput);

//modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){

}

for (var i = 0; i < img.length; i += 1) {
  img[i].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
