//VARS
var signUpButton = document.getElementById('signUpButton');
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var aLinkButton = document.getElementById('aLink')
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var userNameRegex = /^[a-zA-Z0-9]{1,24}$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{6,}$/;


var userList;
if(localStorage.getItem('users')!=null){
    userList=JSON.parse(localStorage.getItem('users'));
}
else{
  userList=[];
}
//FUNCTIONS

signUpButton.addEventListener('click',signUpValidation);
aLinkButton.addEventListener('click',goSignIn)

function signUpValidation(){
    var cartona=""
   if(userName.value.trim() && userEmail.value.trim() && userPassword.value.trim()){
    
    if (InputValidation()) {
        if (!EmailExist(userEmail.value)) {  // Ensure EmailExist returns true if email exists
            // If email does not exist, create the user
            var tempList = {
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value
            };
            userList.push(tempList);
            localStorage.setItem('users', JSON.stringify(userList));
            const cartona = `<p class="text-success">SUCCESS, ACCOUNT CREATED!</p>`;
            document.getElementById('alertDiv').innerHTML = cartona;
            resetInputs()
        } else {
            // If the email already exists, display an error message
            const cartona = `<p class="text-danger">Email already EXISTS!</p>`;
            document.getElementById('alertDiv').innerHTML = cartona;
        }
    }
    
   }

   else{
    cartona = `<p class="text-danger">All inputs required</p>`
    document.getElementById('alertDiv').innerHTML= cartona
    
   }
}

function InputValidation(){
        var cartona=""
        var flag=0;
    if(emailRegex.test(userEmail.value)){
           flag++;
    }
    else{
        cartona = `<p class="text-danger">
                   Email Entered is not valid <br> -Email Should be with a domain
                   </p>`
        document.getElementById('alertDiv').innerHTML= cartona 
     }


    if(userNameRegex.test(userName.value)){
           flag++;

    }
    else{
        cartona += `<p class="text-danger">
        Name Entered is not valid <br>-Name should be maximum 24 letters or numbers.
        </p>`
        document.getElementById('alertDiv').innerHTML= cartona
    }


    if(passwordRegex.test(userPassword.value)){
        flag++;

    }
    else{
        cartona += `<p class="text-danger">
                     Password Entered is not valid <br> -Password should be minmum 6 characters with one special character and one Capital Letter.
                     </p>`
        document.getElementById('alertDiv').innerHTML= cartona
    }
    
    if(flag == 3){return true;}
    else{ return false;}

}

function EmailExist(value){
     var cartona = ""
    for(var i=0;i<userList.length;i++){
        if(userList[i].email == value ){
            cartona = `<p class="text-danger">THIS EMAIL EXISTS!</p>`
            document.getElementById('alertDiv').innerHTML= cartona
            return true
            console.log("EXITS");
            
        }
    }

}

function resetInputs(){
    userEmail.value=""
    userName.value=""
    userPassword.value=""
}

function goSignIn(){
    window.location.href = "index.html"
}