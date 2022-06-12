import {getCount} from "./common.js"
import {getCountheart,dropdowns,searchfilterdropdown,addproducts,addproductsfav} from "./common.js"

//header start ALL CATEGORIES dropdown
  dropdowns();
//header end ALL CATEGORIES dropdown




//start searchfilterdropdown
  searchfilterdropdown();
//end searchfilterdropdown



  //owl-carousel start
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,

    smartSpeed:1500,
    animateIn:'linear',
    animateOut:'linear',


    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
 })
 //owl-carousel start



 //tab-menu -start
  let catnames =document.querySelectorAll(".category-name div")
 let content = document.querySelectorAll(".product-image .row")

  catnames.forEach(catname => {
    catname.addEventListener("click",function(){ 
        
      let actived=document.querySelector(".category-name .active");
      actived.classList.remove("active");
      this.classList.add("active");

      content.forEach(contnt =>{
        if (this.getAttribute("data-id")!=contnt.getAttribute("data-id")) {
          contnt.classList.add("d-none")
        }

        else{
          contnt.classList.remove("d-none")
        }


      })
   

    })
    
  });
 //tab-menu end


 //start sliders col-6
 $('.owl-carousel').owlCarousel({

  nav:true,
  // Infinity:true,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
 //end sliders col-6





 //Basket 
 addproducts();

//Basket 




 //start-favoruites
addproductsfav();
//end-favoruites







