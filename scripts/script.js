const faqItem1 = document.getElementById('faqItem1');
const faqItem2 = document.getElementById('faqItem2');
const faqItem3 = document.getElementById('faqItem3');
const faqItem4 = document.getElementById('faqItem4');
const faqItemContent1 = document.getElementById('faqContent1');
const faqItemContent2 = document.getElementById('faqContent2');
const faqItemContent3 = document.getElementById('faqContent3');
const faqItemContent4 = document.getElementById('faqContent4');

faqItem1.addEventListener('click', toggleContent1);

function toggleContent1() {
  faqItemContent1.classList.toggle('open')
}
faqItem2.addEventListener('click', toggleContent2);

function toggleContent2() {
  faqItemContent2.classList.toggle('open')
}
faqItem3.addEventListener('click', toggleContent3);

function toggleContent3() {
  faqItemContent3.classList.toggle('open')
}
faqItem4.addEventListener('click', toggleContent4);

function toggleContent4() {
  faqItemContent4.classList.toggle('open')
}

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      uri: 'https://open.spotify.com/playlist/04ZyxYZCCPa0CXZhtylqnD?si=0611e95bd3f04b34&nd=1&dlsi=5320a4ed46e248fb'
    };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};
