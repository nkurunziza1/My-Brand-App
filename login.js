let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})




var loginEmail = document.getElementById('email');  
var loginPassword = document.getElementById('password');

let loginMessage = document.getElementById('login-message')

async function login(){
    var loginEmailValue = loginEmail.value;  
    var loginPasswordValue =loginPassword.value ;
    

//  var getSignupEmail = localStorage.getItem('signupEmail')
//  var getSignupPassword = localStorage.getItem('signupPassword')

 
 
 


 if(loginPasswordValue ===""){
    loginMessage.innerHTML = "please fill all required space";
    loginMessage.style.color = 'red'
    loginPassword.style.borderColor = 'red'
}else{
    loginPassword.style.borderColor = 'black'  
    loginMessage.innerHTML = "";
}
let getSignupEmail;
let getSignupPassword;
 await axios.get("https://sparkling-petticoat-bull.cyclic.app/api/v1/users")
.then((res)=>{

    for(let value of res.data){

        getSignupEmail = value.email
        getSignupPassword = value.password
    }
    console.log("response",res.data)
    

}).catch((err)=>{
    console.log("error", err)
})

if(loginEmailValue === getSignupEmail || 
    loginPasswordValue === getSignupPassword){


 let loginData = {

   "email": loginEmailValue ,
   "password": loginPasswordValue, 

  }

  axios.post("https://sparkling-petticoat-bull.cyclic.app/api/v1/auth/login", 
 loginData
 ).then((res)=>{
  console.log("response", res)
  localStorage.setItem("token", res.data.token)

    loginMessage.innerHTML = "Login successful";
    loginMessage.style.color='green';
    loginPassword.style.borderColor = 'green';
    loginEmail.style.borderColor = 'green';

    setTimeout(function makeEmpty(){
        loginPassword.value = "";
        loginEmail.value = ""; 
        loginMessage.innerHTML = ""; 
        
        loginPassword.style.borderColor = 'black';
        loginPassword.style.borderColor = 'black';
    },4000)
   window.location.href='/admin.html'

 }).catch((err)=>{
    console.log("error", err)
    loginMessage.style.color='red'
    loginMessage.innerHTML = "*Invalid password or email";
    
})
    
   
    

}
else{

    if(loginEmailValue === "" || loginPasswordValue ===""){
        loginEmail.style.borderColor = 'red'
        loginPassword.style.borderColor = 'red'
        loginMessage.innerHTML = "**please fill all required space";
        loginMessage.style.color = 'red'
     }else{
        loginEmail.style.borderColor = 'black'
        loginPassword.style.borderColor = 'black' 
    
        loginMessage.innerHTML = "*Invalid password or email"; 
        

        
     }  

}


}
 