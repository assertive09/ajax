let fetchBtn=document.getElementById('fetchBtn'); //holding element of html with this methhod

var x=function buttonClickHandler(){
//Instantiate an xhr object

const xhr=new XMLHttpRequest();
console.log("GEt");
xhr.open('GET','govind.txt',true);
}

fetchBtn.addEventListener('click',x);