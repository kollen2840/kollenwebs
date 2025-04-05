
const reason = document.getElementById("reason")[0].innerText;
const subtn = document.getElementById("subtn");

const textarea = document.getElementById("textarea").innerHTML;

const email = document.getElementById("email").value;

const username = document.getElementById("name").value;
const validator = document.getElementById("validator");


const personalInfo = document.getElementById("personal");
const verticalLine = document.getElementById("vertical");



correspondingHeight();

function correspondingHeight() {
  if (window.innerWidth > 701)
    verticalLine.style.height = personalInfo.innerHeight;
}

// Create an object to store images
const images = {
  profilePic: 'profilepic.png',
  tiktok: '/socials/tiktok.png',
  instagram: '/socials/instagram.png',
  facebook: '/socials/facebook.png',
  youtube: '/socials/youtube.png',
  snapchat: '/socials/snapchat.png',
  pinterest: '/socials/pinterest.png',
  whatsapp: '/socials/whatsapp.png',
  messenger: '/socials/messenger.png',
  telegram: '/socials/telegram.png',
  skype: '/socials/skype.png',
};

// Load images into their respective fields
document.addEventListener('DOMContentLoaded', () => {
  const profilePicImage = document.getElementById('profile-pic');
  profilePicImage.src = images.profilePic;

  const tiktokImage = document.getElementById('tiktok');
  tiktokImage.src = images.tiktok;

  const instagramImage = document.getElementById('instagram');
  instagramImage.src = images.instagram;

  const facebookImage = document.getElementById('facebook');
  facebookImage.src = images.facebook;

  const youtubeImage = document.getElementById('youtube');
  youtubeImage.src = images.youtube;

  const snapchatImage = document.getElementById('snapchat');
  snapchatImage.src = images.snapchat;

  const pinterestImage = document.getElementById('pinterest');
  pinterestImage.src = images.pinterest;

  const whatsappImage = document.getElementById('whatsapp');
  whatsappImage.src = images.whatsapp;

  const messengerImage = document.getElementById('messenger');
  messengerImage.src = images.messenger;

  const telegramImage = document.getElementById('telegram');
  telegramImage.src = images.telegram;

  const skypeImage = document.getElementById('skype');
  skypeImage.src = images.skype;
});


