


 

var formArray =[];



//values to the table---
function onRegister(){
   var name = document.getElementById('name').value;
  var lastName = document.getElementById('lname').value;
  var email  = document.getElementById('mail').value;
  var userName  = document.getElementById('usernam').value;
  var password  = document.getElementById('pwd').value;
 
  var gender = document.getElementsByName('gender');
  
  var formObj = {firstname:name,Lastname:lastName,email:email,username:userName,gender:gender_val};
formArray.push(formObj);
if(formArray == ""){
  localStorage.removeItem(formObj);
}
 
   localStorage.formRecord= JSON.stringify(formArray);


  var gender_val= "";
    
        if (document.getElementById('mal').checked) {
           gender_val = document.getElementById('mal').value;
            
        }else if (document.getElementById('femal').checked) {
           gender_val = document.getElementById('femal').value;
            
        } else{
          
            document.getElementById('gen').innerHTML = "Select Gender";
flag =1;
        }
    
  
  if(name.length === 0){
  document.getElementById('first').innerHTML = "Enter First Name";
  document.getElementById('name').focus();
  flag=1;
}
if(lastName.length === 0){
  document.getElementById('last').innerHTML = "Enter Last Name";
   document.getElementById('name').focus();
  flag=1;
}
if(email.length === 0){
  document.getElementById('emai').innerHTML = "Enter Email";
  
  flag=1;
}

if(userName.length === 0){
  document.getElementById('user').innerHTML = "Select User Name";
  
  flag=1;
}

if(password.length === 0){
  document.getElementById('pass').innerHTML = "Enter Password";
  
  flag=1;
}

 var inputs = document.getElementsByClassName("hid");
 for(var i=0;i<inputs.length;i++){
 if(inputs[i].value == ""){ 
      document.getElementById('regTable').deleteRow();
   return false;
 }
 }

  
  var table = document.getElementById('regTable');
  var row  = table.insertRow();
  var firstNameCell = row.insertCell(0);
  var lastNameCell = row.insertCell(1);
  var emailCell = row.insertCell(2);
  var userNameCell = row.insertCell(3);
  var genderCell = row.insertCell(4);
  
  firstNameCell.innerHTML = name;
  lastNameCell.innerHTML = lastName;
  emailCell.innerHTML = email;
  userNameCell.innerHTML = userName;
  genderCell.innerHTML = gender_val;
  // clear 
   document.getElementById('name').value = "";
  document.getElementById('lname').value = "";
  document.getElementById('mail').value = "";
   document.getElementById('usernam').value = "";
   document.getElementById('pwd').value = "";
   document.getElementById('mal').checked = false;
          document.getElementById('femal').checked = false;
   
  return;
}
function myFunction(){
   var a = document.getElementById("first"); 
  a.remove();
 }
 function myFunctio(){
   var b = document.getElementById("last"); 
  b.remove();
 }
 function myFuncti(){
   var c = document.getElementById("emai"); 
  c.remove();
 }
 function myFunct(){
   var d = document.getElementById("user"); 
  d.remove();
 }
 function myFunc(){
   var e = document.getElementById("pass"); 
  e.remove();
 }
  
