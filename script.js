function gridCreator(num, gm){
    for(let i=0; i<num;i++){
        let gridrow = document.createElement("div");
        gridrow.classList.add("row");
        gridrow.style ="display: flex; gap: 1px;justify-content: center; align-items:center;";
        for(let j = 0; j < num; j++){
            let gridbox = document.createElement("div");
            gridbox.classList.add("box");
            gridbox.style ="width: 1rem; height: 1rem; background-color: gold; border-radius:1px; display: flex; gap: 1px;opacity:0%;";
            gridbox.addEventListener("mouseenter", (e)=>{
                let val = getComputedStyle(e.target);
                let op = val.getPropertyValue("opacity");
                let nop = (20+(op*100))/100;
                e.target.style.setProperty("opacity",nop);
                e.target.style.setProperty("background-color",cr);
                console.log(op);
                console.log(nop);
            } )
           
            gridrow.appendChild(gridbox);
        }
        gm.appendChild(gridrow);
    }

}

function valid(r,g,b){
    if(r>255 || r<0 || g>255 || g<0 || b>255 || b<0 ){
        return false;
    }
    return true;
}

const body = document.querySelector("body");
const title = document.querySelector(".title");
const btn = document.querySelector("#startBtn");
const gm = document.querySelector(".gridMother");
const chbtn = document.querySelector(".change");

let cr = "rgb(0 0 0)"

body.style = "font-family: Monospace; margin: 0; padding: 0px;  background-color: rgb(34 24 28); color: white; display: flex; flex-flow: column; justify-content: space-between; align-items: stretch;";
title.style ="background-color: rgb(49 47 47); ; margin: 0; text-align: center; padding: 40px; font-size: 36px;"
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


gm.style = "background-color: white;"
gridCreator(32,gm);

chbtn.addEventListener("click", ()=>{
    let r = document.querySelector("#red").value;
    let g = document.querySelector("#green").value;
    let b = document.querySelector("#blue").value;
    r = Math.floor(Number(r));
    g = Math.floor(Number(g));
    b = Math.floor(Number(b));
    if(valid(r,g,b)){
        cr = "rgb(" + r + " " + g + " " + b + ")";
    }else{
        alert("Not valid color")
    }
})