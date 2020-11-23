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
let mainSections = document.querySelectorAll('.section');
let mainBody = document.querySelector('.body')
let fromTop = mainBody.scrollTop;
let links = mainNavLinks.childNodes
const hamMenu = document.querySelector(".hamMenu")
const ul = document.querySelector(".ul")

function preloader() {
  let pageloader = document.querySelector('.pageloader')
  pageloader.style.visibility = 'hidden'
  pageloader.setAttribute('aria-busy', 'false')
  document.querySelector('.container').classList.add('visible')
  // document.querySelector('html').style.setProperty('overflow', 'auto')
}
window.addEventListener('load', function(e) {
    setTimeout(preloader, 2000)
    // setTimeout(function() {
    //     // let document.querySelector('.')
    // }, 500)
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

mainBody.addEventListener("scroll", function() {
  fromTop = mainBody.scrollTop;
  mainNavLinks.forEach(function(currentValue, currentIndex) {
    let section = mainSections[currentIndex];
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      currentValue.classList.add("current");
    } else {
      currentValue.classList.remove("current");
    }
  });
});


//Below is some code stolen to hide the navbar when you scroll down and makes it appear again when you scroll up.  This also uses a CSS class call scroll-down the sets the navbar height to 0.


hamMenu.addEventListener("click", function() {
  ul.classList.toggle("focusedUserlist")
  hamMenu.classList.toggle("menu180")
  console.log("clicked")
})
