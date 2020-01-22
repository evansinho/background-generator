const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const css = document.querySelector("h4");
const body = document.getElementById("gradient");


const onBackgroundChange = () => {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ","
	 + color2.value
	 +")";
	 css.textContent = body.style.background;
}

color1.addEventListener("input", onBackgroundChange);
color2.addEventListener("input", onBackgroundChange);