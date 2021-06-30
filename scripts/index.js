const images = document.getElementById("image-gallery");
let visible = false ;

function imageReveal(){
  if(!visible){
    images.style.display = "grid";
    visible = true ;
  } else {
    images.style.display = "none";
    visible = false ; 
  }
}