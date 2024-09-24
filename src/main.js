
var array = [{
  image: "./images/product/skull.jpg",
  price: 1_000_000,
  name: "TSINILAS"
  },
  {
    image: "./images/product/cherry.jpg",
    price: 294,
    name: "EGGPLANT"
    },
    {
      image:"./images/product/skull.jpg",
      price: 20_000,
      name: "NIKOAVOCADO"
      },
      {
        image: "./images/product/skull.jpg",
        price: 20_000,
        name: "NIKOAVOCADO"
        },
        {
          image: "./images/product/skull.jpg",
          price: 20_000,
          name: "NIKOAVOCADO"
          },
          {
            image: "./images/product/skull.jpg",
            price: 20_000,
            name: "NIKOAVOCADO"
            },
            {
              image: "./images/product/skull.jpg",
              price: 20_000,
              name: "NIKOAVOCADO"
              },
              {
                image: "./images/product/skull.jpg",
                price: 20_000,
                name: "NIKOAVOCADO"
                },
                {
                  image: "./images/product/skull.jpg",
                  price: 20_000,
                  name: "NIKOAVOCADO"
                  },
                  {
                    image: "./images/product/skull.jpg",
                    price: 20_000,
                    name: "NIKOAVOCADO"
                    }
      ]

  // console.log(JSON.stringify(array))
  
  var displayOnSale = "";
  for(let i = 0; i < array.length; i++){
    displayOnSale += `<div class="item"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
</div>`
  }
  document.getElementById("onSale").innerHTML = displayOnSale;

  // TRENDING 

  var displayOnTrend = "";
  for(let i = 0; i < 6; i++){
    displayOnTrend += `<div class="item"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
</div>`
  }
  document.getElementById("onTrend").innerHTML = displayOnTrend;

  // DISCOVER

  var displayDiscovery = "";
  for(let i = 0; i < array.length; i++){
    displayDiscovery += `<div class="item"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">${array[i].price}</div>
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
