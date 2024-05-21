let menubar = document.getElementById("menubar");
let menuList=document.getElementById("menuList");
menuList.style.maxHeight= '0px';
menubar.addEventListener("click",()=>{
    if(menuList.style.maxHeight== '0px'){
        menuList.style.maxHeight= '500px'
    }
    else{
        menuList.style.maxHeight= '0px'
    }
})