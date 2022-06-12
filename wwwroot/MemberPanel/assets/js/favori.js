import {favoriCount,basketCount,getCountheart,dropdowns,searchfilterdropdown} from "./common.js"
import {addproducts} from "./common.js"

//header start ALL CATEGORIES dropdown
dropdowns();
//header end ALL CATEGORIES dropdown


//start searchfilter
searchfilterdropdown();
//end searchfilter


//addproduct via localstorage
let fav=document.querySelector(".products .row")
let favories=[];
if (JSON.parse(localStorage.getItem("FavoriProduct")!=null)) {
   favories= JSON.parse(localStorage.getItem("FavoriProduct"))
   
}

ShowFavoruites();
function ShowFavoruites() {
    for (const favs of favories) {
        fav.innerHTML+=`  <div class="col-lg-3 col-sm-12">
        <div class="picture">
            <img src="${favs.image}" alt="banana">
            <div class="icons">
               
                <div class="basket-icon">
                    <a href=""> <i class="fas fa-shopping-cart"></i></a>
                </div>
                <div class="detail-icon">
                    <a href=""> <i class="fas fa-info"></i></a>
                </div>
            </div>
            <div class="name">
                <a href="#">${favs.name}</a>
            </div>
            <div class="price">
                ${favs.price}
            </div>
        </div>
    </div>`
    }
   
}
//addproduct via localstorage



//favoriproduct count 
let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)
//favoriproduct count 

//Basket count 
let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)
//Basket count 


//basket
addproducts();
//basket


//rightcorner favoriproduct count 
let countfavo=document.querySelector(".product-count strong")
countfavo.innerText=JSON.parse(localStorage.getItem("FavoriProduct")).length
//rightcorner favoriproduct count 

//remove-all product
let removeall=document.querySelector("#remove-all");
if((localStorage.getItem("FavoriProduct")!=[])){
    removeall.style.display="block"
}
else{
    removeall.style.display="none"
}



removeall.addEventListener("click",function(e) {
    e.preventDefault();
    localStorage.removeItem("FavoriProduct");
    window.location.reload();

})
//remove-all product


