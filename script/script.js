// VARSSS
var signUpButton = document.getElementById('signUpButton');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var aLinkButton = document.getElementById('aLink')
var userList;
var logUser=[];
if(localStorage.getItem('users')!=null){
    userList=JSON.parse(localStorage.getItem('users'));
}
else{
  userList=[];
}


//FUNCTIONSS

signUpButton.addEventListener('click',logInValidation);
aLinkButton.addEventListener('click',goSignUp)


function logInValidation(){
    var cartona=""
      if(userEmail.value.trim() && userPassword.value.trim()){
        
           if (EmailExist()) {          //CHECK IF IT EXISTS IF EXIST IT RETURNS TRUE
             window.location.href = "profile.html"
           }
            else{
            cartona = `<p class="text-danger">Incorrect EMAIL or PASSWORD</p>`
            document.getElementById('alertDiv').innerHTML= cartona
            }
      }
      else{
           cartona = `<p class="text-danger">All inputs required</p>`
           document.getElementById('alertDiv').innerHTML= cartona
      }
}

function EmailExist(){
    var cartona = ""
   for(var i=0;i<userList.length;i++){
       if(userList[i].email == userEmail.value && userList[i].password == userPassword.value ){
        var tempList=
        {
          name:userList[i].name,
          email:userList[i].email,
          password:userList[i].password
        }
        logUser.push(tempList)        
           cartona = `<p class="text-danger">THIS EMAIL EXISTS!</p>`
           document.getElementById('alertDiv').innerHTML= cartona
           return true
       }
   }
}


function goSignUp(){
  window.location.href = "signup.html"
}