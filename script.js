//your JS code here. If required.
const p = document.getElementById("status");
const b = document.getElementById("enterBtn");
function func() {
	p.innerText = "";
	var h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	p.appendChild(h1);
}
b.addEventListener("click",func);

