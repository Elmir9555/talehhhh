import {favoriCount,basketCount,getCountheart,dropdowns,searchfilterdropdown} from "./common.js"

//header start ALL CATEGORIES dropdown
dropdowns();
//header end ALL CATEGORIES dropdown


//start searchfilter
searchfilterdropdown();
//end searchfilter


//basketcount
let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)

let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)
//basketcount