// window.onscroll = function() {myFunction()};

// const header = document.getElementById("myheader");
// const sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }

let mainNavLinks = document.querySelectorAll("#myheader ul li a");
let mainSections = document.querySelectorAll("#fixedPix", "#aboutContainer", "#portfolioSection", "#resumeSection", "#contactMe");
let mainBody = document.querySelector('.body')
let lastId;
let cur = [];

function preloader() {
  let pageloader = document.querySelector('.pageloader')
  pageloader.style.visibility = 'hidden'
  pageloader.setAttribute('aria-busy', 'false')
  document.querySelector('.container').classList.add('visible')
  // document.querySelector('html').style.setProperty('overflow', 'auto')
}
window.addEventListener('load', function(e) {
    setTimeout(preloader, 2000)
    setTimeout(function() {
        // let document.querySelector('.')
    }, 500)
})

const LottieAnimations = {
  loader: lottie.loadAnimation({
    container: document.querySelector('.loader'),
    isFrame: true,
    autoplay: true,
    loop: false,
    renderer: 'svg',
    preserveAspectRatio: 'xMidYMid meet',
    path: 'js/logo_anim.json',
  }),
}

window.addEventListener("scroll", event => {
  let fromTop = mainBody.scrollTop;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});




