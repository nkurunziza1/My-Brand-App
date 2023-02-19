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

 
 
 


//  if(loginPasswordValue ===""){
//     loginMessage.innerHTML = "please fill all required space";
//     loginMessage.style.color = 'red'
//     loginPassword.style.borderColor = 'red'
// }else{
//     loginPassword.style.borderColor = 'black'  
//     loginMessage.innerHTML = "";
// }


// if(loginEmailValue === getSignupEmail || 
//     loginPasswordValue === getSignupPassword){


 let loginData = {

   "email": loginEmailValue ,
   "password": loginPasswordValue, 

  }

 await axios.post("https://alexandre-nkurunziza.onrender.com/api/v1/auth/login", 
 loginData
 ).then((res)=>{
  console.log("response", res)
  localStorage.setItem("token", res.data.token)

  window.location.href='/admin.html'

 }).catch((err)=>{console.log("error", err)})
    
    // loginMessage.innerHTML = "Login successful";
    // loginMessage.style.color='green';
    // loginPassword.style.borderColor = 'green';
    // loginEmail.style.borderColor = 'green';
    // loginPassword.value = getSignupPassword = localStorage.getItem('signupPassword');
    // loginEmail.value = getSignupEmail = localStorage.getItem('signupEmail');

    // setTimeout(function makeEmpty(){
    //     loginPassword.value = "";
    //     loginEmail.value = ""; 
    //     loginMessage.innerHTML = ""; 
        
    //     loginPassword.style.borderColor = 'black';
    //     loginPassword.style.borderColor = 'black';
    // },4000)

}
// else{

    // if(loginEmailValue === "" || loginPasswordValue ===""){
    //     loginEmail.style.borderColor = 'red'
    //     loginPassword.style.borderColor = 'red'
    //     loginMessage.innerHTML = "**please fill all required space";
    //     loginMessage.style.color = 'red'
    //  }else{
    //     loginEmail.style.borderColor = 'black'
    //     loginPassword.style.borderColor = 'black' 
    
    //     loginMessage.innerHTML = "*Invalid password or email"; 
    //     loginMessage.style.color='red'

        
    //  }  

//}


//}
// 