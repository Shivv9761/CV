document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("menu_button").addEventListener("click",mobile_v)
    function mobile_v(){
        let m=document.querySelector("#mobile-view");
        m.style.height="100%";
        // m.style.transition="all"
    }
    document.getElementById("close_menu").addEventListener("click",desktop_v)
    function desktop_v(){
        let k=document.querySelector("#mobile-view");
        k.style.height="0%";
    }
    function addclick(){

        let items=document.querySelectorAll("section.menu1 nav ul li")
        for(item of items){
            item.addEventListener("click",desktop_v)
        }
    }
    addclick();

})