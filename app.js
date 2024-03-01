var front= document.querySelector(".face-front");
var back= document.querySelector(".face-back");
var flip= document.querySelector(".book-content");
var uno= document.querySelectorAll(".book");
var portada= document.querySelectorAll("#portada");

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
    uno[i].style.zIndex = customZindex;
    customZindex--;

   uno[i].addEventListener("click",function(e){
        var tgt= e.target;
        var unothis=this;

        unothis.style.zIndex=contZindex;
        contZindex++;

        if (tgt.getAttribute("class")=="face-front") {
            unothis.style.zIndex=contZindex;
            contZindex +20;
            setTimeout(function(){
                unothis.style.transform = "rotateY(-180deg)";

            },500);
        }
        if (tgt.getAttribute("class")=="face-back") {
            unothis.style.zIndex=contZindex;
            contZindex +20;
            setTimeout(function(){
                unothis.style.transform = "rotateY(0deg)";

            },500);
        }
        if(tgt.getAttribute("i")=="portada"){
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
        }

        if(tgt.getAttribute("i")=="trsf"){
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
        }
        

   });
    }
