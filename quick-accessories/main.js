
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
      image: "price",
      price: 20_000,
      name: "NIKOAVOCADO"
      },
      {
        image: "price",
        price: 20_000,
        name: "NIKOAVOCADO"
        }
      ]

  // console.log(JSON.stringify(array))
  
  var out = "";
  for(let i = 0; i < array.length; i++){
    out += `<div class="item"> 
    <img class="product-img" src="${array[i].image}">
    <div class="product price">${array[i].price}</div>
    <div class="product brand">${array[i].name}</div>
</div>`
  }
  document.getElementById("prodList").innerHTML = out;

  //profile menu

  const profileBtn = document.getElementById("profileBtn")

  let profileToggle = 0;

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
  })

  var monthly = ''

  for(let i; i < 1; i++){
    monthly += 
    `    <div class="subscription">
      <h1>MEMBERSHIP</h1>
      <hr>
        <section>
          Membership benifits
        </section>
        <div>
          <button class="monthly" type="submit">monthly</button>
          <button class="yearly" type="submit">yearly</button>
        </div>
    </div>
    <button class="order">Order</button>
  </div>`
  }

  const monthlySubscriptionFrom = document.getElementById("monthlySub")

  monthlySubscriptionFrom.addEventListener("click", () =>{
    
  })