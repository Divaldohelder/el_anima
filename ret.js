var nu=0;
let a=document.getElementsByTagName("h2")[0];
let innerCursor=document.querySelector('.inner-cursor');
let outerCursor=document.querySelector('.outer-cursor');
let g=document.getElementById("box")

document.addEventListener("mousemove", moveCursor);
function moveCursor(e) {
    let x=e.clientX
	 let y=e.clientY
	 innerCursor.style.left=`${x}px`;
	 innerCursor.style.top=`${y}px`;
	 outerCursor.style.left=`${x}px`;
	 outerCursor.style.top=`${y}px`;
}
function actualizar() {
	 a.innerHTML=nu+"%"
	 nu++
	 if(nu==20 || nu==40 || nu==60 || nu==80 || nu==100){
	   g.classList.add("rota");
		document.querySelector("h2").classList.add("ro1")
	 }
	 if(nu==29 || nu==49 || nu==69 || nu==89 || nu==100){
	 	g.classList.remove("rota");
		}
	 if(nu==101){
	 nu=0
	 document.querySelector("div#dz").style.display="none"
    document.querySelector("div#conte").style.display="flex"
	 }


	
}
function mudar() {
    setInterval(actualizar ,90)
}





















