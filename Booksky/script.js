//selecting popup box,pop-up overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById(".add-popup-button")

addpopupbutton.addEventListener("click",function(){
        popupoverlay.Style.display = "block"
        popupbox.Style.display = "block"
      })


