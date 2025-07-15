function validateForm()
{
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let phonoregex = /^\d{10}$/;

    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementById("email").value;
    const pwd=document.getElementById("pwd").value;
    const cnfmPwd=document.getElementById("cnfmPwd").value;
    const phoneno=document.getElementById("phoneno").value;

   const nameError=document.getElementById("name-error");
   const addressError=document.getElementById("address-error");
   const emailError=document.getElementById("email-error");
   const pwdError=document.getElementById("pwd-error");
   const confirmPassword=document.getElementById("cnfmPwd");
   const phonenoError=document.getElementById("phoneno-error");

nameError.textContent="";
addressError.textContent="";
emailError.textContent="";
pwdError.textContent="";
cofmpwd.textContent="";
phonenoError.textContent="";
if(name=="" || (!nameregex.test(name)))
{
    nameError.textContent="please enter your name properly";
    return false;
}
if(address=="")
{
    addressError.textContent="please enter your address properly";
    return false;
}
if(email==""  || (!emailregex.test(email)))
{
    emailError.textContent="please enter your email properly";
    return false;
}
if(pwd=="" || (!passwordregex.test(pwd)) )
{
    pwdError.textContent="please enter your pwd atleast 8 characters properly";
    return false;
}
if(cofm=="" || (!confirmPassword.test(cnfmPwd)))
{     
    cofmpwd.textContent="please enter your confirmPassword";
    return false;   
}
if(phoneno=="" || (!phonoregex.test(phoneno)))
{
    phonenoError.textContent="please enter your phono atleast 10 digit properly";
    return false;
}
return true;

}