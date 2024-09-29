const scrollable = document.querySelectorAll(".scrollable");

function gainScroll(){
  document.body.style.overflow = 'scroll';
}
function removeScroll(){
  document.body.style.overflow = 'hidden';
}
for(let i=0; i < scrollable.length; i++){
  scrollable[i].addEventListener("mouseover", removeScroll);
  scrollable[i].addEventListener("mouseout", gainScroll)
  scrollable[i].addEventListener("wheel", function (e) {

    if( e.wheelDelta > 0){
      this.scrollLeft -= 50;
    }
    else{
      this.scrollLeft += 50;
    }
  
  }, {passive: true})
}

// +++++++++++++++++++++++++++++++++++++++++

// minimize tool

const expand = document.querySelector(".expand");
const category = document.querySelector(".category-wrapper")

let toggle = 0
expand.addEventListener("click",() =>{
  console.log(toggle)
  if(toggle == 1){
    category.setAttribute("style", "category-wrapper")
    scrollable[0].addEventListener("mouseover", removeScroll)
    toggle -= 1
  }
  else{
    category.style.display= "flex"
    category.style.flexWrap= "wrap" 
    category.style.justifyContent= "center" 
    scrollable[0].removeEventListener("mouseover", removeScroll)
    
    toggle += 1
  }
})

// darkmode
let darkmode = localStorage.getItem("darkmode")
const themeBtn = document.getElementById("toggle")

const enableDarkmode = () =>{
  document.body.classList.add("darkPallet")
  localStorage.setItem("darkmode", 'active')
}

const disableDarkmode = () =>{
  document.body.classList.remove("darkPallet")
  localStorage.setItem("darkmode", null)
}

document.body.onload = ()=>{
  darkmode = localStorage.getItem("darkmode")
  darkmode == "active" ? themeBtn.checked = true : themeBtn.checked = false
  darkmode == "active" ?  document.body.classList.add("darkPallet") : document.body.classList.remove("darkPallet")

}

themeBtn.addEventListener("click", ()=>{
  darkmode = localStorage.getItem("darkmode")
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})