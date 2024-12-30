const gallery = document.getElementById("gallery");
const gallerySpan = gallery.getElementsByTagName("span");
const thumbnailBtn = document.getElementById("thumbnailBtn");
const countdownAudio = document.getElementById("countdownAudio");
const birthdayAudio = document.getElementById("birthdayAudio");
const wishingAudio = document.getElementById("wishingAudio");

function playGallery() {
  countdownAudio.play();
  thumbnailBtn.style.display ='none';
  gallery.classList.add("scopeAnimation");
  for (var i = 0; i < gallerySpan.length; i++) {
    gallerySpan[i].setAttribute("class", "scopeSpanAnimation");
  }
}

function onCountdownAudioPlay() {
  countdownAudio.play();
}

function onCountdownAudioPause() {
  countdownAudio.pause();
}

function onBirthdayAudioPlay() {
  birthdayAudio.play();
  birthdayAudio.volume = 0.5;
}

function onBirthdayAudioPause() {
  birthdayAudio.pause();
}

function onWishingAudioPlay() {
  wishingAudio.play();
}

function onWishingAudioPause() {
  wishingAudio.pause();
}
