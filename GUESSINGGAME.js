var images = [
  { kind: "cat", url: "http://xdesktopwallpapers.com/wp-content/uploads/2012/01/So%20Sweet%20Small%20Cat%20Looking%20Front.jpg"},
  { kind: "cat", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcTfmr2fAsbN74h1cuwTLYsGuxAxtUt8x8EyuCpkxyJHEcwmg4Fmqw"},
  { kind: "cat", url: "http://www.zastavki.com/pictures/originals/2013/Animals___Cats_Very_small_Siamese_cat_sitting_on_a_stone_045624_.jpg"},
  { kind: "cat", url: "http://wallpapers.androlib.com/wallicons/wallpaper.big-pqC.cs.png"},

  { kind: "dog", url: "http://freedogpics.com/wp-content/uploads/2014/08/cute-dog-breeds_1407316542.jpg"},
  { kind: "dog", url: "http://freefunnydogpictures.com/wp-content/uploads/2014/05/small-dog_1400085616.jpg"},
  { kind: "dog", url: "http://pad2.whstatic.com/images/thumb/b/bb/Get-Your-Small-Dog-to-Stop-Biting-and-Barking-at-You-Step-2.jpg/670px-Get-Your-Small-Dog-to-Stop-Biting-and-Barking-at-You-Step-2.jpg"},
  { kind: "dog", url: "http://i.imgur.com/6HWQR.jpg"}
];
 
var correctGuesses = 0;
var incorrectGuesses = 0;
var currentImage = 0; 

function makeGuess(guess) {
  var image = randomImage();

  if (image.kind == guess ) {
     correctGuesses += 1;
  }
  else {
     incorrectGuesses += 1;
  }

  displayImage(image.url); 
  updateResults();
};


function guessDog() {  
  makeGuess("dog"); 
};

function guessCat() {  
  makeGuess("cat"); 
};

function displayImage(imageUrl) {
  document.getElementById("guessedImage").src = imageUrl;
};

function updateResults() {
  var results = document.getElementById("guess-results");

  results.innerHTML = "You have guessed " + correctGuesses + " out of " + totalGuesses();
};

function totalGuesses() {
  return incorrectGuesses + correctGuesses;
};

function randomImage() {
  var randomIndex = Math.floor((Math.random() * images.length))
  return images[randomIndex];
};

function conpleteGame() { 
  window.alert("congratulations!");
  window.alert("You have guessed " + correctGuesses + " out of " + images.length);
};


