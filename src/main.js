
var array = [{
  image: "./src/images/product-images/cartier-trinity-large-hoop-earrings.png",
  price: 1_000_000,
  discount: 40,
  name: "Cartier Trinity Large Hoop Earings",
  category: "earings"
  },
  {
    image: "./src/images/product-images/diamond-earings.png",
    price: 9_999,
    discount: 40,
    name: "Diamond Earings",
    category: "earings"
    },
    {
      image:"./src/images/product-images/leather-wallet.png",
      price: 135,
      discount: 40,
      name: "Leather Wallet",
      category: "wallet"
      },
      {
        image: "./src/images/product-images/rolex-day-date.avif",
        price: 20_000,
        discount: 40,
        name: "Rolex Day-Date",
        category: "wrist-watch"
        },
        {
          image: "./src/images/product-images/swiss-luxury.jpg",
          price: 50_000,
          discount: 40,
          name: "Swiss Luxury",
          category: "wrist-watch"
          },
          {
            image: "./src/images/product-images/emerald-silver-chain-pendant.png",
            price: 28_000,
            discount: 40,
            name: "Emeral Silver Chain Pendant",
            category: "necklace"
            },
            {
              image: "./src/images/product-images/diamond-necklace.png",
              price: 25_000,
              discount: 40,
              name: "Diamond Necklace",
              category: "necklace"
              },
              {
                image: "./src/images/product-images/ring-chained-pendant.png",
                price: 400,
                discount: null,
                name: "Golden Ring Chained Pendant",
                category:"necklace"
                },
                {
                  image: "./src/images/product-images/lion-head-24-karrot-bracelet.png",
                  price: 8_500,
                  discount: null,
                  name: "Lion Head 24 karrot Bracelet",
                  category:"bracelet"
                  },
                  {
                    image: "./src/images/product-images/diamond-ring.png",
                    price: 20_000,
                    discount: null,
                    name: "Diamond Ring",
                    category:"ring"
                    }
      ]

  // console.log(JSON.stringify(array))
  
  var displayOnSale = "";
  for(let i = 0; i < array.length; i++){
    let discountPercentage = array[i].price * (array[i].discount / 100)
    let discountPrice =  Math.round( array[i].price - discountPercentage)
    if(array[i].discount != null){
      displayOnSale += `<div class="swiper-slide item sales"> 
    <img class="product-img" src="${array[i].image}">
    <div class="price-wrapper">
    <div class="product price">₱${array[i].price}</div>
    <div class="product" data-discountedPrice>₱${discountPrice} </div>
    </div>
    <div class="product brand">${array[i].name}</div>
      </div>`
    }
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

    signInandOutCont.addEventListener("click", (event) =>{
      if(event.target == signInandOutCont){
        signInandOutCont.setAttribute("style", "display: none")
      }
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