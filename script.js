
function gridCreator(num, gm){
    for(let i=0; i<num;i++){
        
        let gridrow = document.createElement("div");
        
        gridrow.classList.add("row");
        gridrow.style ="display: flex; gap: 1px;justify-content: center; align-items:center;background-color:white;";
        
        for(let j = 0; j < num; j++){
        
            let gridbox = document.createElement("div");
        
            gridbox.classList.add("box");
            gridbox.style ="width: 1rem; height: 1rem; background-color: gold; border-radius:1px; display: flex; gap: 1px;opacity:0%;";
        
            gridbox.addEventListener("mouseenter", hover)
           
            gridrow.appendChild(gridbox);
        }
        gm.appendChild(gridrow);
    }

}

const hover = (e) => {
    let val = getComputedStyle(e.target);
    let op = val.getPropertyValue("opacity");
    let nop = (20+(op*100))/100;
    e.target.style.setProperty("opacity",nop);
   if(random.checked===true){
    randomColorSelector()
   }
    
    e.target.style.setProperty("background-color",cr);

    

}

function gridNull(){
    const box = document.querySelectorAll(".box");
    box.forEach((b)=>{
        console.log("remove")
        b.removeEventListener("mouseenter",hover)
    })
}

function valid(r,g,b){
    if(isNaN(r) || isNaN(g) || isNaN(b)){
        return false;
    }
    if(r>255 || r<0 || g>255 || g<0 || b>255 || b<0 ){
        return false;
    }
    
    return true;
}

function toggleV(m){
   
    
    m.forEach((n)=>{
        if(n.style.display === "none" ){
            donebtn.style.visibility = "visible"
            n.style.visibility = "visible"
            n.style.display = "flex"
            n.style.opacity = "50%"
            n.style.transition = " opacity 5s";
            donebtn.style.opacity = "1";
            n.style.opacity = "100%"
        }else {
           
            n.style.visibility = "hidden"

            gm.style.visibility = "visible";
            donebtn.style.visibility = "hidden"
        }
});
}

function changeColor(e){
    cr = e.target.value;
}
const body = document.querySelector("body");
const m = document.querySelectorAll(".main")
const title = document.querySelector(".title");
const btn = document.querySelector("#startBtn");
const gm = document.querySelector(".gridMother");
const chbtn = document.querySelectorAll("#color")
const done = document.querySelector("#done")
const donebtn = document.querySelector("#donebtn")
const gridSize = document.querySelector("#grid")
const random = document.querySelector(".random")
let cr = "rgb(0 0 0)"

body.style = "font-family: Monospace; margin: 0; padding: 0px;  background-color: rgb(34 24 28); color: white; display: flex; flex-flow: column; justify-content: space-between; align-items: stretch;";
title.style ="background-color: rgb(49 47 47); margin: 0; text-align: center; padding: 40px; height: 400px;font-size: 36px;"
title.style.transition = "height 2s";
btn.style = "width:40px; "
btn.addEventListener("click", (e)=>{
    let clr = document.querySelectorAll(".box");
    clr.forEach( (box)=>{
        box.style.opacity= 0;
    })
})

/* title.addEventListener("mouseenter", (e)=>{
    alert("hover check");
}) */

let gs = 32;
gm.style = "background-color:  rgb(34 24 28);color: white; display: flex; flex-flow: column; justify-content: center; align-items: center; margin: 1%; max-height: 1400px;"
gridCreator(gs,gm);


color.addEventListener("change", (e)=>{
    changeColor(e);
    console.log("color")
})



const selection = document.querySelector(".rgb");

selection.style = "display: flex; justify-content: center; align-items: center; gap: 20px;"

const start = document.querySelector("#start");
m.forEach((n)=>{
    n.style.visibility = "hidden";
    n.style.display = "none"
    n.style.opacity = "0";
    
})
start.style = "width: 70px; height:40px; font-size: 20px; transition: all 300ms;";
start.addEventListener("click", (e)=>{
    e.target.style.opacity = "0";
    title.style.height = "0";
    toggleV(m);
})

done.style = "display: flex; justify-content: center; align-item: center; margin: 20px;"

donebtn.style = "width: 70px; height:40px; font-size: 20px; opacity: 0;"

donebtn.addEventListener("click", (e)=>{
    title.style.height ="200px"

   
    title.style.transition = "height 1s"
   
    toggleV(m)
    gridNull()
    
})

gridSize.addEventListener("change", (e)=>{
    if(e.target.value < 5 || e.target.value > 82){
        alert("Not a valid grid size")
        gs=16;
        e.target.value = 16
    } else{
        gs = e.target.value;
        clearGrid(gm)
        gridCreator(gs,gm)
    }
})

function clearGrid(gm){
    while(gm.firstChild){
        gm.removeChild(gm.firstChild)
    }
}

function randomColorSelector(){
    let num1 = Math.floor((Math.random()*100)%255);
    let num2 = Math.floor((Math.random()*100)%255)
    let num3 = Math.floor((Math.random()*100)%255)

    cr = "rgb("+num1+" "+ num2+" "+ num3+")"
  
}

if(random.checked ===true){
    randomColorSelector()
    
}
