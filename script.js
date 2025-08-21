//your JS code here. If required.
const btn=document.getElementById("btn");
let ageInput=document.getElementById('age');
let nameInput=document.getElementById("name");


function check(){
let age=parseInt(ageInput.value);
let	name=nameInput.value;
	if(!age || !name){
		alert("Please enter valid details");
		return;
	}
	else{
    	if(age<18){
			
 const promise2= new Promise((resolve,reject)=>{
  setTimeout(()=>{
	  resolve(alert("Oh sorry . You aren't old enough."));
   }) })

		}
	
else{
const promise1= new Promise((resolve,reject)=>{
  setTimeout(()=>{
	  resolve(alert("Welcome, . You can vote."));
   })
});
	
}	
	}
}

btn.addEventListener("click",check);

