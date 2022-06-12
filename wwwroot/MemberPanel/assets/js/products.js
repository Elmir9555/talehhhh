import {favoriCount,basketCount,getCountheart,dropdowns,searchfilterdropdown} from "./common.js"

//header start ALL CATEGORIES dropdown
dropdowns();
//header end ALL CATEGORIES dropdown


//start searchfilter
searchfilterdropdown();
//end searchfilter






//favoriproduct count 
let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)
//favoriproduct count 

//Basket count 
let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)
//Basket count 


//rightcorner favoriproduct count 
let countfavo=document.querySelector(".product-count strong")
countfavo.innerText=JSON.parse(localStorage.getItem("FavoriProduct")).length
//rightcorner favoriproduct count 