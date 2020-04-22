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

// function preloader() {
//   let pageloader = document.querySelector('.pageloader')
//   pageloader.style.opacity = '0'
//   preloader.setAttribute('aria-busy', 'false')
//   document.getElementById('site').style.opacity = '1'
// }
// window.addEventListener('load', function(e) {
//     setTimeout(preloader(), 1500)
//     setTimeout(function() {
//         // let document.querySelector('.')
//     }, 500)
// })




const hamMenu = document.querySelector(".hamMenu")
const ul = document.querySelector(".ul")

hamMenu.addEventListener("click", function() {
  ul.classList.toggle("focusedUserlist")
  hamMenu.classList.toggle("menu180")
  console.log("clicked")
})
