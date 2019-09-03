// input field
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('password');
// form


const form = document.getElementById('myForm');
// validation colors
const green='#7FFF00';
const red ='#FF0000';

function validateFirstName(){
    if(checkIfEmty(firstName)) return;
    if(!checkifOnlyLetters(firstName)) return;
    console.log(firstName)
    return true;
}
function validateLastName(){
    if(checkIfEmty(lastName)) return;
    if(!checkifOnlyLetters(lastName)) return;
    console.log(lastName)
    return true;
}
function validateEmail(){
    if(checkIfEmty(email)) return;
    if(!checkifOnlyLetters(email)) return;
    console.log(email)
    return true;
}
function validatePassword(){
    if(checkIfEmty(password)) return;
    if(!containsCharactres(password,2))return;
    return true;
}
function checkIfEmty(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field,'must notss be empty');
        return true;
    }else{
        return false
    }
}
function isEmpty(value){
    if(value==='')return true;
    return false;
}
function setInvalid(field,message){
    field.className='invalid';
    field.nextElementSibling.innerHTML=message;
    field.nextElementSibling.style.color=red;
}
function setvalid(field){
    field.className='valid';
    field.nextElementSibling.innerHTML='';
    field.nextElementSibling.style.color=green;
}
function checkifOnlyLetters(field){
    if(/^[a-zA-z]+$/.test(field.value)){
        setvalid(field);
        return true; 
    }else{
        setInvalid(field,`${field.name} must contain only lettes`);
        return false;
    }
}
function containsCharactres(field,code) {
    let regEx;
    switch(code){
        case 1:
            regEx =/(?=.*[a-zA-Z])/;
           return matchWithRegEx(regEx,field,'Must contain at least one letter');
        case 2:
             regEx = /(?=.*\d)(?=.*[a-zA-Z])/;   
            return matchWithRegEx(regEx,field,'Must contain at least one letter and one number');
        default:
            return false;
        }

}
function matchWithRegEx(regEx,field,message){
    if(field.value.match(regEx)){
        setvalid(field);
        return true;
    } else {
        setInvalid(field,message);
        return false;
    }
}
