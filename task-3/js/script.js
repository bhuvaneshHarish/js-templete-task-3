let inpEle=document.getElementById("mytext");
let textArea=document.getElementById("typearea");
let ulEle=document.getElementById("myul");
let addEle=document.getElementById('addBtn');
let editbtn=document.getElementsByClassName('edit-btn');
let delbtn=document.getElementsByClassName('delete-btn');
let mainDiv=document.getElementsByClassName('item-box');
let head=document.getElementsByClassName('title');
let para=document.getElementsByClassName('para');
let updateBtn = document.getElementById("updateBtn");

let IdCount = 0;
let boxId;

addEle.addEventListener("click", function(){
	
	if((inpEle.value !=="" && textArea.vlaue !=="")){
		var main=document.createElement("div");
		main.className = "item-box";
		main.setAttribute("id","item-box-"+IdCount);
		
		let title=document.createElement("h3");
		title.className = "head";
		title.innerText = inpEle.value;
		
		var para = document.createElement("p");
		para.className = "para";
		para.innerText = textArea.value;
		
		var editBtn = document.createElement("button");
		editBtn.className = "edit-btn";
		editBtn.setAttribute("type","button");
		editBtn.innerText = "edit";
		
		var deleteBtn = document.createElement("button");
		deleteBtn.className = "delete-btn";
		deleteBtn.setAttribute("type","button");
		deleteBtn.innerText = "delete";
		
		main.append(title, para, editBtn, deleteBtn);
		ulEle.append(main);
		
		IdCount++;
		
		inpEle.value = '';
		textArea.value='';
	}else{
		alert("enter the value")
	}
	
	//delete
	
	for(let i=0; i<delbtn.length;i++){
		delbtn[i].addEventListener("click",del)
	}
	
	//edit
	
	for(let i=0; i<editbtn.length;i++){
		editbtn[i].addEventListener("click",edit)
	}
});

//delete

function del(){
	this.parentNode.remove();
}

//edit

function edit(){
	let main = this.parentNode;
	let title = main.getElementsByClassName("head")[0];
	let para = main.getElementsByClassName("para")[0];
	
	inpEle.value = title.innerText;
	textArea.value = para.innerText;
	boxId = main.id;
}

//update button

updateBtn.addEventListener("click",update);

function update(){
	let main = document.getElementById(boxId);
	let title = main.getElementsByClassName("head")[0];
	let para = main.getElementsByClassName("para")[0];
	
	title.innerText = inpEle.value;
	para.innerText = textArea.value;
	
	inpEle.value = '';
	textArea.value = '';
}