
var array = [{
  image: "./src/images/resources/placeholder.png",
  price: 1_000_000,
  name: "TSINILAS"
  },
  {
    image: "./src/images/resources/placeholder.png",
    price: 294,
    name: "EGGPLANT"
    },
    {
      image:"./src/images/resources/placeholder.png",
      price: 20_000,
      name: "NIKOAVOCADO"
      },
      {
        image: "./src/images/resources/placeholder.png",
        price: 20_000,
        name: "NIKOAVOCADO"
        },
        {
          image: "./src/images/resources/placeholder.png",
          price: 20_000,
          name: "NIKOAVOCADO"
          },
          {
            image: "./src/images/resources/placeholder.png",
            price: 20_000,
            name: "NIKOAVOCADO"
            },
            {
              image: "./src/images/resources/placeholder.png",
              price: 20_000,
              name: "NIKOAVOCADO"
              },
              {
                image: "./src/images/resources/placeholder.png",
                price: 20_000,
                name: "NIKOAVOCADO"
                },
                {
                  image: "./src/images/resources/placeholder.png",
                  price: 20_000,
                  name: "NIKOAVOCADO"
                  },
                  {
                    image: "./src/images/resources/placeholder.png",
                    price: 20_000,
                    name: "NIKOAVOCADO"
                    }
      ]

  // console.log(JSON.stringify(array))
  
  var displayOnSale = "";
  for(let i = 0; i < array.length; i++){
    displayOnSale += `<div class="swiper-slide item sales"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">₱${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
      </div>`
  }
   document.getElementById("onSale").innerHTML = displayOnSale 

  // TRENDING 

  var displayOnTrend = "";
  for(let i = 0; i <= 3; i++){
    displayOnTrend += `<div class="item trending"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price"> ₱${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
</div>`
  }
  document.getElementById("onTrend").innerHTML = displayOnTrend;

  // DISCOVER

  var displayDiscovery = "";
  for(let i = 0; i < array.length; i++){
    displayDiscovery += `<div class="item"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">₱${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
</div>`
  }
  document.getElementById("discovery").innerHTML = displayDiscovery;

  //profile menu

  let profileToggle = 0;
  const profileBtn = document.getElementById("profileBtn")


  const profilePopUp = document.querySelector(".profile-pop-up") 
  
  profileBtn.addEventListener("click", () => {

    if(profileToggle == 0){
      profilePopUp.setAttribute("style", "display: none")
      profileToggle = 1
    }
    else{
      profilePopUp.setAttribute("style", "display: block")
      profileToggle = 0
    }
    console.log(profileToggle)
  })

  const signInBTN = document.querySelector(".signIn-button");
  const signInandOutCont = document.querySelector(".signINandOUT-container");
  const signInandOutWrapper = document.querySelector(".signINandOUT-wrapper");
  
  signInBTN.addEventListener("click", () =>{
    signInandOutCont.setAttribute("style", "display: grid")
  })
  
  signInandOutWrapper.addEventListener("mouseout", () =>{
    signInandOutCont.addEventListener("click", () =>{
      signInandOutCont.setAttribute("style", "display: none")
    })
  })
  
  signInandOutWrapper.addEventListener("mouseover", () =>{
    signInandOutCont.addEventListener("click", () =>{
      signInandOutCont.setAttribute("style", "display: grid")
    })
  })


  const signUp = document.querySelector(".signUp");
  const signIn = document.querySelector(".signIn");
  const signUpForm = document.querySelector(".signUp-form");
  const signUpFormToFill = document.querySelector(".signINandOUT-form");
  const signInForm = document.querySelector(".signIn-form");

  signUp.addEventListener("click", () => {
    signUpForm.setAttribute("style", "display: flex")
    signUp.setAttribute("style", "background-color: white")
    signIn.setAttribute("style", "background: none")
    signInForm.setAttribute("style", "display: none")
  })
  
  signIn.addEventListener("click", () => {
    signInForm.setAttribute("style", "display: flex")
    signIn.setAttribute("style", "background-color: white")
    signUpForm.setAttribute("style", "display: none")
    signUp.setAttribute("style", "background: none")
  })