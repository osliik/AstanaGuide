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

document.querySelector(".ctn").addEventListener("click", function () {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var closePopup = document.getElementById("close-popup"); 
  
  closePopup.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

  const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
      searchButton = document.getElementById(button)
  
    searchButton.addEventListener('click', () =>{
      searchBar.classList.toggle('show-search')
    })
  }
  toggleSearch('search-bar', 'search-button')


function openForm(){
  document.getElementById("myForm").style.display = "block";
}

function closeForm(){
  document.getElementById("myForm").style.display = "none";
}