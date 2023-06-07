
//form validation
function FORMVALIDATE() {

  let Firstname = document.forms["myForm"]["first-name"].value;
  let Lastname = document.forms["myForm"]["last-name"].value;
  let Gender = document.forms["myForm"]["gender"].value;
  let Country = document.forms["myForm"]["country"].value;
  let Email = document.forms["myForm"]["email"].value;
  let Username = document.forms["myForm"]["username"].value;
  let Password = document.forms["myForm"]["password"].value;
  let CPassword = document.forms["myForm"]["c-password"].value;
  let Date = document.forms["myForm"]["date"].value;
  let Zipcode = document.forms["myForm"]["zipcode"].value;


  if (Firstname == "" || Lastname =="" || Gender =="" || Country =="" || Email =="" || Username =="" || Password =="" || CPassword =="" || Date =="" || Zipcode =="") {
    
    alert("must be filled out");
    return false;
  }
  else if (Password != CPassword){
   
    alert("password is not match");
    return false;
  }

else{
   
  alert("Sucessfully Created")
   
    event.preventDefault();
    let Popup=document.getElementById("bg-popupsucessfully");
    Popup.classList.add("openup-desgin");

}
  }

//form data to save or store  localstroage
function SaveData(){

  let Firstname = document.getElementById("first-name").value;
  let Lastname = document.getElementById("last-name").value;
  let Gender = document.getElementById("gender").value;
  let Country = document.getElementById("country").value;
  let Email = document.getElementById("email").value;
  let Username = document.getElementById("username").value;
  let Password = document.getElementById("password").value;
  let CPassword = document.getElementById("c-password").value;
  let Date = document.getElementById("date").value;
  let Zipcode = document.getElementById("zipcode").value;

  localStorage.setItem("firstname", Firstname);
  localStorage.setItem("lastname", Lastname);
  localStorage.setItem("gender", Gender);
  localStorage.setItem("country", Country);
  localStorage.setItem("email", Email);
  localStorage.setItem("username", Username);
  localStorage.setItem("password", Password);
  localStorage.setItem("c-password", CPassword);
  localStorage.setItem("date", Date);
  localStorage.setItem("zipcode", Zipcode);

}

//registeration slide
let Po=document.getElementById("bg-registeration");
  function UserRegistration(){
  Po.classList.add("registerationslide");
  }
  function UserRegistrationremove(){
  Po.classList.remove("registerationslide");
  }                           

//profile upload
  let Inputfile =document.getElementById("input-file");
  let Profilepic =document.getElementById("profile-pic");
  Inputfile.onchange=function(){
  Profilepic.src=URL.createObjectURL(Inputfile.files[0]);
    }
 


//closepopup sucessffully 
 function Closepopup(){
   event.preventDefault();
   let Popup=document.getElementById("bg-popupsucessfully");
   Popup.classList.remove("openup-desgin");
 }



        
  
