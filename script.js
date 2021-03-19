function clockTick()    {
    currentTime = new Date();
    month = currentTime.getMonth() + 1;
    day = currentTime.getDate();
    year = currentTime.getFullYear();
   // alert("hi");
   document.getElementById('date').innerHTML=day + "." + "0" + month + "." + year;
 }
 
 setInterval(function(){clockTick();}, 1000);//setInterval(clockTick, 1000); will also work



 const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 500);
