let bodyEl=document.body;
bodyEl.style.backgroundColor="#0f0000";
bodyEl.style.color="#ffff91";
bodyEl.style.textAlign="center";

let formEl=document.getElementById('form');
formEl.style.border="solid 2px #ffffff";
formEl.style.margin="auto";
formEl.style.width="500px";
formEl.style.marginTop="100px";

let usernameValue=document.getElementById('username');
usernameValue.style.padding="10px";
usernameValue.style.fontSize="20px";
usernameValue.style.borderRadius="10px";
usernameValue.style.border="none";
usernameValue.style.marginBottom="15px";

let passwordValue=document.getElementById('password');
passwordValue.style.padding="10px";
passwordValue.style.fontSize="20px";
passwordValue.style.borderRadius="10px";
passwordValue.style.border="none";
passwordValue.style.marginBottom="15px";

let loginButton=document.getElementById('login');
loginButton.style.padding="10px";
loginButton.style.fontSize="20px";
loginButton.style.borderRadius="10px";
loginButton.style.border="none";
loginButton.style.marginBottom="15px";
loginButton.style.backgroundColor="yellow"
loginButton.style.width="100px";

function submitFunction(){
    let usernameValue=document.getElementById('username').value;
    let passwordValue=document.getElementById('password').value;
    if (usernameValue==""|| passwordValue=="") { 
        alert("No Blank values allowed");
        return false;
    }
    else if(usernameValue.includes(" ")){
        alert("No spaces");
        return false;
    }
    
    else{
        return true;
    }
}
