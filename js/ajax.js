let fetchBtn = document.getElementById('fetchBtn'); //holding element of html with this methhod

var x = function buttonClickHandler() {
    //Instantiate an xhr object

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){

        console.log("States are:",this.readyState);
    }
    console.log("You clcked on log");
    
    xhr.open('GET', 'govind.txt', true);

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log("On progress invoked");
    }

   
    // what to do when response is ready
    xhr.onload = function(){
        if(this.status===200)
        console.log(this.responseText);  //return response as text
        else
        console.log("Some error occured");
    }

    xhr.send();
}


fetchBtn.addEventListener('click', x);