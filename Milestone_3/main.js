const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let index = 0;
icons.forEach(creaElementi);

function creaElementi(icons,index){ 
	document.querySelector(".main-container").innerHTML +=  `
		<div class = "icon-container">
			<i class = "${icons.family} ${icons.prefix+icons.name} icon"></i>
		</div>
	`
}

var icon = document.getElementsByClassName("icon");

for(let i=0;i<icons.length;i++){
	if(icons[i].type == "animal"){
		icon[i].classList.add("animal");
	}
	else if(icons[i].type == "vegetable"){
		icon[i].classList.add("vegetable");
	}
	else if(icons[i].type == "user"){
		icon[i].classList.add("user");
	}
}

var userIcon = document.getElementsByClassName("user");
var vegetableIcon = document.getElementsByClassName("user");
var animalIcon = document.getElementsByClassName("user");
var iconContainer = document.getElementsByClassName("icon-container");

function filtra(){
	console.log("sto filtrando");
	var filterSelector = document.getElementById("filter");
	filterSelector.addEventListener('change', mostra());
	function mostra(){
		if(filterSelector.value == "animal"){
			for(let i=0;i<icons.length;i++){
				if(icons[i].type == "animal"){
					iconContainer[i].id = "show";
				}
				else{
					iconContainer[i].id = "hide"
				}
			}
		}
		if(filterSelector.value == "user"){
			for(let i=0;i<icons.length;i++){
				if(icons[i].type == "user"){
					iconContainer[i].id = "show";
				}
				else{
					iconContainer[i].id = "hide"
				}
			}
		}
		if(filterSelector.value == "vegetable"){
			for(let i=0;i<icons.length;i++){
				if(icons[i].type == "vegetable"){
					iconContainer[i].id = "show";
				}
				else{
					iconContainer[i].id = "hide"
				}
			}
		}
		if(filterSelector.value == "all"){
			for(let i=0;i<icons.length;i++){
				iconContainer[i].id = "show";
			}
		}
	}
}
