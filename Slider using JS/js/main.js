 
 var imgs =Array.from(document.getElementsByClassName('img-fluid')) ;
 var lightboxContainer = document.getElementById('lightboxContainer');
 var lightboxItem = document.getElementById('lightboxItem')
 var closeIcon = document.getElementById('close');
 var prev = document.getElementById('prev');
 var next = document.getElementById('next');
 var currentIndex = 0;


for(var i=0;i<imgs.length;i++){
   
    imgs[i].addEventListener('click',function(e) {
        var imgSrc=e.target.src;
        lightboxItem.style.backgroundImage=`url(${imgSrc})`;
        lightboxContainer.style.display="flex"
        currentIndex = imgs.indexOf(e.target.src);
       
        
    })
}
next.addEventListener('click',nextButton)
function nextButton() {  
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;

    }
    var imgSrc=imgs[currentIndex].src;
    lightboxItem.style.backgroundImage=`url(${imgSrc})`;
}

prev.addEventListener('click',prevButton)
function prevButton(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
        

    }
    var imgSrc=imgs[currentIndex].src;
    lightboxItem.style.backgroundImage=`url(${imgSrc})`;
}

closeIcon.addEventListener('click',closeButton)
function  closeButton() {
    lightboxContainer.style.display="none"
  }

  document.addEventListener('keyup',function(e){
    if(e.keyCode==27){
        closeButton();
    }
    else if(e.keyCode==37){
        prevButton();
    }
    else if(e.keyCode==39){
        nextButton();
    }
    
})


