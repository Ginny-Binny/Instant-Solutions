    /* ============================================================= Navbar 2 ============================================================= */
    // navbar <nav></nav>
    var menuElem = document.querySelector(".menu") ,
        // ++++++++++ "overlay Layer" on "navbar" ++++++++++
        overlayLayerElem = document.querySelector(".menu-overlay") ,
        // navbar <ul></ul>
        menuMainElem = menuElem.querySelector(".menu-main") ,
        // "go back arrow" of "Sidebar"
        goBack = menuElem.querySelector(".go-back") ,
        // "Close Icon" of "Sidebar"
        closeMenu = menuElem.querySelector(".mobile-menu-close") ,
        // Menubar Button
        menuTrigger = document.querySelector(".mobile-menu-trigger") ,
        // Megamenu of the clicked element
        subMenu ;

    // +++++++++++++++++++++++++ When click on "<ul></ul>" of navbar +++++++++++++++++++++++++
    menuMainElem.addEventListener("click",function(e){
        if( !menuElem.classList.contains('active') )
        {
            return; 
        }
        // e.target == the element you clicked on 
        if ( e.target.closest(".menu-item-has-children") )
        {
                // Store the Clicked Element : 
                var hasChildrenElem =  e.target.closest(".menu-item-has-children") ;
                // Call showSubMenu() function : Function To Appear the MegaMenu When Click on "Link"
                showSubMenu(hasChildrenElem);
        }
    });
    // +++++++++++++++++++++++++ When click on "Go Back" of "sidebar" +++++++++++++++++++++++++
    goBack.addEventListener("click",function(e){
        // Call "hideSubMenu" function
        hideSubMenu();
    });
    // +++++++++++++++++++++++++ When click on "Menubar Button" of "navbar" +++++++++++++++++++++++++
    menuTrigger.addEventListener("click",function(e){
        // Call "toggleSidebar" function
        toggleSidebar();
    });
    // +++++++++++++++ When click on "Close Icon" : Hide "sidebar" and "overlay Layer" +++++++++++++++++++++++++
    closeMenu.addEventListener("click",function(e){
        /* Hide "sidebar"  */
        menuElem.classList.remove("active");
        /* Hide "overlay Layer" */
        overlayLayerElem.classList.remove("active");
    });
    // +++++++++++++++ When click on "Overlay Layer" : Hide "sidebar" and "overlay Layer" +++++++++++++++++++++++++
    overlayLayerElem.addEventListener("click",function(e){
         /* Hide "sidebar"  */
         menuElem.classList.remove("active");
         /* Hide "overlay Layer" */
         overlayLayerElem.classList.remove("active");
    });
    // ++++++++++++++++ When "Resize Window" and Screen_Width = 991px then Hide "Overlay Layer  +++++++++++++++++++++++++
    window.onresize = function()
    {
        /* Not Mobile Screen Then Hide "sidebar" , "overlay Layer" */
        if ( this.innerWidth > 991 )
        {
            // Toggle "sidebar"
            menuElem.classList.remove("active");
            // ++++++++++ "overlay Layer" on "navbar" ++++++++++
            overlayLayerElem.classList.remove("active");
        }
    }
   // +++++++++++++++++++++++++ Function Definition : "showSubMenu" function +++++++++++++++++++++++++
   function showSubMenu( hasChildrenParam )
   {
        // Store the Megamenu of the clicked element :  megamenu or sub-menu 
        subMenu = hasChildrenParam.querySelector(".sub-menu");
        // .sub-menu اللي واخد كلاس sub-menu or megamenu لل active 
        subMenu.classList.add("active");
        /* Add the "keyframe" to "Active megamenu" :  اللي ضغطت عليها حاليا وهي حاليا ظاهرة megamenu هضيف الكيفرام لل */
        subMenu.style.animation = "slideRight 0.5s ease forwards";
        /* Fetch The "textContent" of the "<a></a>" Which is the parent of the <i class='fa fa-angle-down'></i> of the <li></li> that has "sub-menu"  */
        var menuTitle = hasChildrenParam.querySelector("i").parentNode.childNodes[0].textContent ;
        // "current menu title" of the "sidebar"
        // sidebar لل title ويحطه ك sub-menu اللي تم الضغط عليه بشرط انه يحتوي link بتاع ال textContent هجيب ال
        menuElem.querySelector(".current-menu-title").innerHTML = menuTitle ;
        // .mobile-menu-head اللي واخد كلاس sidebar header لل active هيضيف الكلاس
        menuElem.querySelector(".mobile-menu-head").classList.add("active");
   }
   // +++++++++++++++++++++++++ Function Definition : "hideSubMenu" function +++++++++++++++++++++++++
   function hideSubMenu()
   {    
        /* Add the "keyframe" to "Active megamenu" :  */
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        setTimeout( function(){
             // .sub-menu sub-menu or megamenu active 
            subMenu.classList.remove("active");
        } , 300 );       
        // "current menu title" of the "sidebar"
        // sidebar  title sub-menu link   textContent  
        menuElem.querySelector(".current-menu-title").innerHTML = " ";
        // .mobile-menu-head    sidebar header  active  
        menuElem.querySelector(".mobile-menu-head").classList.remove("active");
   }
   // +++++++++++++++++++++++++ Toggle Sidebar Function +++++++++++++++++++++++++
   function toggleSidebar()
   {
        // Toggle "sidebar"
        menuElem.classList.toggle("active");
        // ++++++++++ "overlay Layer" on "navbar" ++++++++++
        overlayLayerElem.classList.toggle("active");
   }


   /* +++++++++++++++++++++++++++++++++++++++++++++ Slider Section +++++++++++++++++++++++++++++++++++++++++++++ */
   var indexValue = 1 ;
   // ------------------------ Call "showImg()" Function ------------------------
   showImg(indexValue);
   // ------------------------ "btn_slide()" Function : When Click on "indicators" ------------
   function btn_slide(e) 
   {
        showImg( indexValue = e ); 
   }
   // ------------------------ "side_slide()" Function : When Click on "Arrows" ------------
   function side_slide(e) 
   {
        showImg( indexValue += e ); 
   }
   /* ------------------------ "showImg()" Function : Show Slides ------------------------ */
   function showImg(e)
   {
        var i ;
               // Return All Slides( images ) : array of images 
        const  img = document.querySelectorAll(".images img"),
                // Return All "image Circles" : array of indicators 
                slider_circles = document.querySelectorAll(".btn-sliders span");
        
        console.log(img);
        console.log(slider_circles);
        
        if( e > img.length )
        {
            indexValue = 1 ;
        }
        else if( e < 1 )
        {
            indexValue = img.length ;
        }
        // Hide All Slides ( slider images ) 
        for( var i=0 ; i < img.length ; i++ )
        {
            img[i].style.display = "none" ;
        }
        for( var j=0 ; j < slider_circles.length ; j++ )
        {
            slider_circles[j].style.background = "rgba(0 , 0 , 0 , 0.5)";
        }
   }

  /* ========================================================== Slider ================================================================= */
   /* ++++++ slider Container ++++++ */
const slideContainer = document.querySelector('.sliderContainer');
    /* ++++++ slides container ++++++ */
const slide = document.querySelector('.slides');
    /* +++++++++ next arrow +++++++++ */
const nextBtn = document.getElementById('next-btn');
    /* +++++++++ prev arrow +++++++++ */
const prevBtn = document.getElementById('prev-btn');
    /* +++++++++ slider delay ++++++++ */
const interval = 3000;
    /* +++++++++ All Slides +++++++++ */
let slides = document.querySelectorAll('.slide');
    /* +++++++++ slide index +++++++++ */
let index = 1;
let slideId;
/* "cloneNode" :  creates a copy of a node with it's descendants , and returns the clone */
// ----------- Take "Copy or Clone" From "First Slide" of "Slider" -----------
const firstClone = slides[0].cloneNode(true);
// ----------- Take Copy From "Last Slide" of "Slider" -----------
const lastClone = slides[slides.length - 1].cloneNode(true);
// ----------- Give id to "First Slide" of "Slider" -----------
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
// ------------- append the "firstClone" to the "end" of "slider container" --------------
slide.append(firstClone);
// ------------- prepend the "lastClone" to the "start" of "slider container" --------------
slide.prepend(lastClone);
// ------------- Get "Slide Width" -------------------
const slideWidth = slides[index].clientWidth;
// ------------- "Translate" the "Slider" on "x-axis" -------------
// "slide_width" 
slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
// ++++++++++++++++++++ "Start Slider" +++++++++++++++++++
const startSlide = () => {
  slideId = setInterval(() => {
    // **** moveToNextSlide() Function ****
    moveToNextSlide();
  }, interval);
};
/* ==================================== "getSlides" Function ==================================== */
const getSlides = () => document.querySelectorAll('.slide');
// +++++++++++++++++++ When "Slider" Move +++++++++++++++++++++
slide.addEventListener('transitionend', () => {
    /* +++++++++ Get All Slides +++++++++ */
  slides = getSlides();
    // if the "current slide" is the "first slide"
  if (slides[index].id === firstClone.id) 
  {
    // Stop "Smooth Transition"
    slide.style.transition = 'none';
    index = 1;
    // "slide_width" 
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  // if the "current slide" is the "last slide"
  if (slides[index].id === lastClone.id) 
  {
    // Stop "Smooth Transition"
    slide.style.transition = 'none';
    // index of "slide" = index of "last slide"     
    index = slides.length - 2;
    // "slide_width" 
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});
/* ==================================== "moveToNextSlide" Function ==================================== */
const moveToNextSlide = () => 
{
    /* +++++++++ Get All Slides +++++++++ */
    slides = getSlides();
    // when reach the "end copy slide" of slider , exit from function
    if (index >= slides.length - 1) return;
    /* increase "index" each " interval = 3000 milli_second"  */
    index++;
    // make "Smooth Transition"
    slide.style.transition = '.7s ease-out';
    // ++++++++++++ Move Slider on "X-axis" ++++++++++++
    // "slide_width" 
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
/* ==================================== "moveToPrevSlide" Function ==================================== */
const moveToPreviousSlide = () => 
{
    // when reach the "start copy slide" of slider , exit from function
    if (index <= 0) return;
    index--;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
/* +++++++++++++ When "Enter" Mouse To "Slider" : [Stop] Slider +++++++++++++++ */
slideContainer.addEventListener('mouseenter', () => 
{
    // Stop Slider From Working : 'Pause' "SetTimeOut()"
    clearInterval(slideId);
});
/* +++++++++++++ When "Leave" Mouse From "Slider" : [Start] Slider +++++++++++++ */
slideContainer.addEventListener('mouseleave', startSlide);
// ++++++++++++++ When Click on "Next Button" of "Slider" ++++++++++++++
nextBtn.addEventListener('click', moveToNextSlide);
// ++++++++++++++ When Click on "Previous Button" of "Slider" ++++++++++++++
prevBtn.addEventListener('click', moveToPreviousSlide);
/* ++++++++++++++ Call "startSlide()" Function ++++++++++++++ */
startSlide();
// ++++++++++++++++++ To make Page Reload When Resize , To make Slider Suitable on Screen ++++++++++++++++++
addEventListener('resize', (event) => {
  window.location.reload();
});
/* ======================================================= gallery Section ======================================================= */
/* 	************************************ product gallery blocks : All , Phone , Laptop , Headphone , Shoes **************************** */
var ulEl = document.getElementById("productGalleryBlocksUlId");
    allProductEl = document.getElementById("link1Id"),
	phoneProductEl = document.getElementById("link2Id"),
	laptopProductEl = document.getElementById("link3Id");

/* #################################### total_width = 100 / 5 = 20% , we have 6 <li></li> #################################### */
// "All"  "All" 
allProductEl.onclick = function()
{
	ulEl.style.transform="translateX(0%)";
	allProductEl.style.backgroundColor="darkorange";
	phoneProductEl.style.backgroundColor="#622267";
	laptopProductEl.style.backgroundColor="#622267";
}
phoneProductEl.onclick = function()
{
	ulEl.style.transform="translateX(33%)";
	phoneProductEl.style.backgroundColor="darkorange";
	allProductEl.style.backgroundColor="#622267";
	laptopProductEl.style.backgroundColor="#622267";
}
laptopProductEl.onclick = function()
{
	ulEl.style.transform="translateX(66%)";
	laptopProductEl.style.backgroundColor="darkorange";
	phoneProductEl.style.backgroundColor="#622267";
	allProductEl.style.backgroundColor="#622267";
}