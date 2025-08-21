//your JS code here. If required.
const btn=document.getElementById("btn");
let age=document.getElementById('age');
let name=document.getElementById("name");


function check(){
age=parseInt(age.value);
	name=name.value;
	if(!age || !name){
		alert("Please enter valid details");
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

