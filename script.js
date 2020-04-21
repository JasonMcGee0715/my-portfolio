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


