/*jslint browser:true */
/*global document */


/*jslint browser:true */
/*global document */

function loadImage(url, index) {
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.addEventListener("load", function() {
        resolve({ img, index });
      });
      img.addEventListener("error", function(err) {
        reject(err);
      });
      img.src = url;
    });
  }
  
  const imageUrls = [
    "./static/images/travel/trip1.JPEG",
    "./static/images/travel/trip2.jpg",
    "./static/images/travel/trip13.JPEG",
    "./static/images/travel/trip5.JPEG",
    "./static/images/travel/trip3.JPEG",
    "./static/images/travel/trip4.JPEG",
    "./static/images/travel/trip12.JPEG",
    "./static/images/travel/trip7.JPEG",
    "./static/images/travel/trip11.JPEG",
    "./static/images/travel/trip6.JPEG"
  ];
  
  const imageDescriptions = [
    "Widok na Paryż z wieży Montparnasse",
    "Kościół św. Jakuba w Sztokholmie",
    "Batumi - Gruzja",
    "Katedra i galeria Emanuela w Mediolanie",
    "Sztokholm",
    "Pompeje",
    "Mdina - pierwsza stolica Malty",
    "Varenna",
    "Valetta",
    "Szczyt Piani d'Erna"
  ];
  
  const loadedImages = [];
  const imagesInCols = [4,3,3];
  
  function loadImages() {
    const promises = [];
  
    imageUrls.forEach(function(url, index) {
      const promise = loadImage(url, index);
      promises.push(promise);
      promise.then(function(data) {
        loadedImages[data.index] = data.img;
      }).catch((err) => {
        console.error("Error loading image: ", err);
      });
    });
  
    return Promise.all(promises);
  }
  
  loadImages().then(function() {
  
    const gallery = document.getElementById("image-gallery");
    var counter = 0;
  
    //dla wszystkich zdjęć stwórz diva z obrazkiem i div overlay w srodku
  
    imagesInCols.forEach(function(numImages) {
      const myCol = document.createElement("div");
      myCol.setAttribute("class", "column");
      Array.from({ length: numImages }).forEach(function(_, i) {
        const myDiv = document.createElement("div");
        myDiv.setAttribute("class", "image-item");
        const divOverlay = document.createElement("div");
        divOverlay.setAttribute("class", "overlay");
        divOverlay.innerHTML = imageDescriptions[counter];
        const img = loadedImages[counter];
        myDiv.appendChild(img);
        myDiv.appendChild(divOverlay);
        myCol.appendChild(myDiv);
        counter += 1;
      });
      gallery.appendChild(myCol);
    });
  
  }).catch((err) => {
    console.error("Error loading images: ", err);
  });


  /*
function loadImage(url) {
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.addEventListener("load", function() {
        resolve(img);
      });
      img.addEventListener("error", function(err) {
        reject(err);
      });
      img.src = url;
    });
  }

const imageUrls = [
"./static/images/travel/trip1.JPEG",
"./static/images/travel/trip2.jpg",
"./static/images/travel/trip13.JPEG",
"./static/images/travel/trip5.JPEG",
"./static/images/travel/trip3.JPEG",
"./static/images/travel/trip4.JPEG",
"./static/images/travel/trip12.JPEG",
"./static/images/travel/trip7.JPEG",
"./static/images/travel/trip11.JPEG",
"./static/images/travel/trip6.JPEG"
];

const imageDescriptions = [
"Widok na Paryż z wieży Montparnasse",
"Kościół św. Jakuba w Sztokholmie",
"Batumi - Gruzja",
"Katedra i galeria Emanuela w Mediolanie",
"Sztokholm",
"Pompeje",
"Mdina - pierwsza stolica Malty",
"Varenna",
"Valetta",
"Szczyt Piani d'Erna"
];

const loadedImages = [];
const imagesInCols = [4,3,3];

function loadImages() {
    const promises = [];

    imageUrls.forEach(function(url) {
        const promise = loadImage(url);
        promises.push(promise);
        promise.then(function(img) {
            loadedImages.push(img);
        }).catch((err) => {
            console.error("Error loading image: ", err);
        });
    });

    return Promise.all(promises);
}

loadImages().then(function() {

    const gallery = document.getElementById("image-gallery");
    var counter = 0;

    //dla wszystkich zdjęć stwórz diva z obrazkiem i div overlay w srodku

    imagesInCols.forEach(function(numImages) {
        const myCol = document.createElement("div");
        myCol.setAttribute("class", "column");
        Array.from({ length: numImages }).forEach(function() {
            const myDiv = document.createElement("div");
            myDiv.setAttribute("class", "image-item");
            const divOverlay = document.createElement("div");
            divOverlay.setAttribute("class", "overlay");
            divOverlay.innerHTML = imageDescriptions[counter];
            const img = loadedImages[counter];
            myDiv.appendChild(img);
            myDiv.appendChild(divOverlay);
            myCol.appendChild(myDiv);
            counter+=1;
        });
        gallery.appendChild(myCol);
    });


}).catch((err) => {
    console.error("Error loading images: ", err);
});
*/
