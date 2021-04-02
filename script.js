var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByClassName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function additem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delitem(){
	myList.removeChild(story[0]);
	if(story.length == 0){
		popup.style.display = "block";
	}	
}

function closepopup(){
	popup.style.display="none";
}	
btn1.addEventListener("click", additem);
btn2.addEventListener("click", delitem);
close.addEventListener("click", closepopup);