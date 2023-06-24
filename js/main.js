  
document.querySelector(".burger").addEventListener("click", openNavbar);
document.querySelector(".close").addEventListener("click", closeNavbar);

function openNavbar() {
  console.log(111);
  document.querySelector(".hed-nav").style.display = "flex";
  document.querySelector(".burger").style.display = 'none'
  document.querySelector(".close").style.display = 'block'
}
function closeNavbar() {
  document.querySelector(".hed-nav").style.display = "none";
  document.querySelector(".burger").style.display = 'block'
  document.querySelector(".close").style.display = 'none'
}