var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength(){
	return input.value.length;}

function toggleAndButton(item){
	item.addEventListener("click", function(){
	item.classList.toggle("done");
	})

	var clear = document.createElement("button");
	clear.innerHTML = "Delete";
	item.appendChild(clear);

	clear.addEventListener("click", function(){
		item.parentNode.removeChild(item);
	});
}

function addElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	toggleAndButton(li);
	
}

function addafterclick(){
	if (inputLength() > 0){
			addElement();
		}
}

function addafterenter(event){
	if (inputLength() > 0 && event.which===13){
		 	addElement();
		 }
}

for (const item of li){
	toggleAndButton(item);
}

button.addEventListener("click", addafterclick);

input.addEventListener("keypress", addafterenter);