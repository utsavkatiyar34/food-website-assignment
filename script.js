let log=document.getElementById("login");
log.addEventListener('click',form);
function form(){
location.href="login.html";  
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
let area=document.getElementById("iomdb");
async function getData(){
  let url="https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  let sear=document.getElementById('addyInput').value;
 url= url+sear;
 console.log(url);
  try{
    const res=await fetch(url);
    let data=await res.json();
    
    console.log(data);
    data=data.meals;
    console.log(data);
    displayData(data);
    storeData(data);
  }
  catch(err){
    console.log(err);
  }
  /* idMeal: "52959"
strMeal: "Baked salmon with fennel & tomatoes"
strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg"*/ 
}
function displayData(data){
    data.forEach(function(meals){

    let box=document.createElement("div");
    let thumbnail=document.createElement("img");
    thumbnail.src=meals.strMealThumb;
    let heading=document.createElement("h1");
    heading.textContent=meals.strMeal;
    let discr=document.createElement("h2");
    discr.textContent="Meal ID:"+meals.idMeal;
    box.append(thumbnail,heading, discr);
    area.append(box);
    });
    }
  function storeData(data){
    
   let st=localStorage.setItem('stored',JSON.stringify(data));
   console.log(st);
   
  }
  let def=document.getElementById("errrr");
  function displayDef(st){
    stored.forEach(function(st){

    let box=document.createElement("div");
    let thumbnail=document.createElement("img");
    thumbnail.src=st.strMealThumb;
    let heading=document.createElement("h1");
    heading.textContent=st.strMeal;
    let discr=document.createElement("h2");
    discr.textContent="Meal ID:"+st.idMeal;
    box.append(thumbnail,heading, discr);
    area.append(def);
    });
    }
    displayDef(st);

