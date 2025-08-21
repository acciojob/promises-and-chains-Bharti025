//your JS code here. If required.
const btn=document.getElementById("btn");
let ageInput=document.getElementById('age');
let nameInput=document.getElementById("name");


function check(){
let age=parseInt(ageInput.value);
let	name=nameInput.value.trim();
	if(!age || !name){
		alert("Please enter valid details");
		return;
	}
	
   const agepromise=new Promise((resolve,reject)=>
	   {setTimeout(()=>{
     if(age<18){
		 reject("Oh sorry " + name + ". You aren't old enough.");
            } else {
                resolve("Welcome, " + name + ". You can vote.");
	 }	
	},4000);
	agepromise.then(message=>{
		alert(message));
	}).catch(error=>{
		alert(error));
	}) 
   
	
})
}

btn.addEventListener("click",check);

