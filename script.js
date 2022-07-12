const tikla = () =>{
    let butonmenu=document.getElementById("menu1");
    let nav=document.getElementById("nav");
    let butonclose=document.getElementById("menu2");
    
    butonmenu.classList.remove("kapali");
    butonmenu.classList.add("acik");
    nav.classList.remove("acik");
    butonclose.classList.remove("acik");
    
    
    // butonclose.classList.remove("acik");
    

}
const tikla2=()=>{
    let butonmenu=document.getElementById("menu1");
    let nav=document.getElementById("nav");
    let butonclose=document.getElementById("menu2");
    
    butonmenu.classList.add("kapali");
    butonmenu.classList.remove("acik");
    nav.classList.add("acik");
    butonclose.classList.add("acik");
}

