//VARSSSSS
var logOutButton = document.getElementById('logOutButton')
var welcomeDiv = document.getElementById('welcomeDiv')
var logUser=[];
if(localStorage.getItem('log')!=null){
    logUser=JSON.parse(localStorage.getItem('log'));
}
else{
  logUser=[];
}


//FUNCTIONSSS
logOutButton.addEventListener('click',logOut)

getUser()
function getUser(){
      var cartona = `
            <h1> Welcome ${logUser[0].name} </h1>
      `
      welcomeDiv.innerHTML= cartona;
         
}

function logOut(){
    localStorage.removeItem('log')
    logUser=[];
    window.location.href = "index.html"

}