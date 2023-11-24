var stars = document.getElementsByClassName("fa-regular");
var emoji = document.getElementById("emoji");

stars[0].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#e4e4e4";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(0)";
}

stars[1].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-100px)";
}

stars[2].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-200px)";
}
stars[3].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-300px)";
}

stars[4].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
  emoji.style.transform = "translateX(-400px)";
}

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare:true,
  "max-glare":1,
});

tippy('.facebook',{
  content:"Facebook",
  placement:'bottom'
})

tippy('.twitter',{
  content:"Twitter",
  placement:'bottom'
})

tippy('.youtube',{
  content:"Youtube",
  placement:'bottom'
})

tippy('.instagram',{
  content:"Instagram",
  placement:'bottom'
})

document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case '1':
      window.location.href = 'index.html';
      break;
    case '2':
      window.location.href = 'Attractions.html';
      break;
    case '3':
      window.location.href = 'Food.html';
      break;
    case '4':
      window.location.href = 'Contact.html';
      break;
    default:
      break;
  }
});

const kose = {
  cuisine: "Восточная и европейская",
  bill: "4500  tenge",
  address: "​Улица Кайым Мухамедханов, 4а"
};

document.getElementById("koseCuisine").innerHTML =
"Cuisine: " + kose.cuisine;

document.getElementById("koseBill").innerHTML =
"Average bill: " + kose.bill;

document.getElementById("koseAdress").innerHTML =
"Address: " + kose.address;

const gasteria = {
  cuisine: "European, Asian",
  bill: "8,000 tenge",
  address: "Turan 22/1, Tokpanova 27"
};

document.getElementById("gasteriaCuisine").innerHTML =
"Cuisine: " + gasteria.cuisine;

document.getElementById("gasteriaBill").innerHTML =
"Average bill: " + gasteria.bill;

document.getElementById("gasteriaAdress").innerHTML =
"Address: " + gasteria.address;

const hspf = {
  cuisine: "European",
  bill: "3,000 tenge",
  address: "Кенесары, 63"
};

document.getElementById("hspfCuisine").innerHTML =
"Cuisine: " + hspf.cuisine;

document.getElementById("hspfBill").innerHTML =
"Average bill: " + hspf.bill;

document.getElementById("hspfAdress").innerHTML =
"Address: " + hspf.address;


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

function openKoseModal() {
  document.getElementById('koseModal').style.display = 'flex';
}

function closeKoseModal() {
  document.getElementById('koseModal').style.display = 'none';
}

function openGasteriaModal() {
  document.getElementById('gasteriaModal').style.display = 'flex';
}

function closeGasteriaModal() {
  document.getElementById('gasteriaModal').style.display = 'none';
}

function openHspfModal() {
  document.getElementById('hspfModal').style.display = 'flex';
  }

function closeHspfModal() {
  document.getElementById('hspfModal').style.display = 'none';
  }


const toggleSearch = (search, button) =>{
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button)

  searchButton.addEventListener('click', () =>{
    searchBar.classList.toggle('show-search')
  })
}
toggleSearch('search-bar', 'search-button')