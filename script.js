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

const body = document.querySelector("body");
const m = document.querySelectorAll(".main")
const title = document.querySelector(".title");
const btn = document.querySelector("#startBtn");
const gm = document.querySelector(".gridMother");
const chbtn = document.querySelector(".change");
const done = document.querySelector("#done")
const donebtn = document.querySelector("#donebtn")

let cr = "rgb(0 0 0)"

body.style = "font-family: Monospace; margin: 0; padding: 0px;  background-color: rgb(34 24 28); color: white; display: flex; flex-flow: column; justify-content: space-between; align-items: stretch;";
title.style ="background-color: rgb(49 47 47); margin: 0; text-align: center; padding: 40px; height: 400px;font-size: 36px;"
title.style.transition = "height 2s";
btn.style = "width:40px;"
btn.addEventListener("click", (e)=>{
    let clr = document.querySelectorAll(".box");
    clr.forEach( (box)=>{
        box.style.opacity= 0;
    })
})

/* title.addEventListener("mouseenter", (e)=>{
    alert("hover check");
}) */


gm.style = "background-color:  rgb(34 24 28);color: white; display: flex; flex-flow: column; justify-content: center; align-items: center; margin: 1%; "
gridCreator(32,gm);

chbtn.addEventListener("click", ()=>{
    let r = document.querySelector("#red").value;
    let g = document.querySelector("#green").value;
    let b = document.querySelector("#blue").value;
    r = Math.floor(Number(r));
    g = Math.floor(Number(g));
    b = Math.floor(Number(b));
    if(valid(r,g,b) === true){
        cr = "rgb(" + r + " " + g + " " + b + ")";
        alert("Color changed to rgb(" + r + " " + g + " " + b + ")")
    }else{
        alert("Not valid color")
    }
})

const selection = document.querySelector(".rgb");

selection.style = "display: flex; justify-content: center; align-items: center; gap: 20px;"

const start = document.querySelector("#start");
m.forEach((n)=>{
    n.style.visibility = "hidden";
    n.style.display = "none"
    n.style.opacity = "0";
    
})
start.style = "transition: all 300ms;";
start.addEventListener("click", (e)=>{
    e.target.style.opacity = "0";
    title.style.height = "0";
    toggleV(m);
})

done.style = "display: flex; justify-content: center; align-item: center; margin: 20px;"

donebtn.style = "opacity: 0;"

donebtn.addEventListener("click", (e)=>{
    title.style.height ="200px"

   
    title.style.transition = "height 2s"
   
    toggleV(m)
    gridNull()
})