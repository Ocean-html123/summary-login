function validate(){
    var password = document.getElementById('pass');
var length = document.getElementById('length');
 
    if(password.ariaValueMax.length >= 8){
        alert('Login Succesful');
    } else {
        alert('Login Failed');
    }
}