//user informations to  store in a table


function  onFormSubmit()
{
  
    var Table=document.getElementById("customers");
    var NewRow=Table.insertRow(Table.length);
    cell1=NewRow.insertCell(0);
    cell2=NewRow.insertCell(1);
    cell3=NewRow.insertCell(2);
    cell4=NewRow.insertCell(3);
    cell5=NewRow.insertCell(4);
    cell6=NewRow.insertCell(5);
    let Username =localStorage.getItem("username");
    let Password =localStorage.getItem("password");
    let Email =localStorage.getItem("email");
    let Country =localStorage.getItem("country");
    cell1.innerHTML=Username;
    cell2.innerHTML=Password;
    cell3.innerHTML=Email;
    cell4.innerHTML=Country;
    cell5.innerHTML='<button onclick="onEdit(this)">Edit</button> ';
    cell6.innerHTML='<button onclick="onDelete(this)">Delete</button>';
 
  
}

var selectedRow=null;
function insertdata(){

    if(selectedRow != null){
        UpdateRecords();

    }


    event.preventDefault();
    var Table=document.getElementById("customers");
    var NewRow=Table.insertRow(Table.length);
    cell1=NewRow.insertCell(0);
    cell2=NewRow.insertCell(1);
    cell3=NewRow.insertCell(2);
    cell4=NewRow.insertCell(3);
    cell5=NewRow.insertCell(4);
    cell6=NewRow.insertCell(5);
    let Username =document.getElementById("username").value;
    let Password =document.getElementById("password").value;
    let Email    =document.getElementById("email").value;
    let Country  =document.getElementById("country").value;
    cell1.innerHTML=Username;
    cell2.innerHTML=Password;
    cell3.innerHTML=Email;
    cell4.innerHTML=Country;
    cell5.innerHTML='<button onclick="onEdit(this)">Edit</button> ';
    cell6.innerHTML='<button onclick="onDelete(this)">Delete</button>';
}
function onEdit(td){
    
    event.preventDefault();
    selectedRow=td.parentElement.parentElement;
    document.getElementById("username").value=selectedRow.cells[0].innerHTML;
    document.getElementById("password").value=selectedRow.cells[1].innerHTML;
    document.getElementById("email").value=selectedRow.cells[2].innerHTML;
    document.getElementById("country").value=selectedRow.cells[3].innerHTML;

}
function onDelete(td){
    
    event.preventDefault();
    if(confirm("Are you sure to delete this record ?")){
        selectedRow=td.parentElement.parentElement;
        var Table=document.getElementById("customers");
        Table.deleteRow(selectedRow.rowIndex);     
    }
    Restform();
}


function Restform(){
    
    event.preventDefault();
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("email").value="";
    document.getElementById("country").value="";

}

function UpdateRecords(){
   
    event.preventDefault();
    let Username =document.getElementById("username").value;
    let Password =document.getElementById("password").value;
    let Email    =document.getElementById("email").value;
    let Country  =document.getElementById("country").value;
    selectedRow.cells[0].innerHTML=Username;
    selectedRow.cells[1].innerHTML=Password;
    selectedRow.cells[2].innerHTML=Email;
    selectedRow.cells[3].innerHTML=Country;
   
    
}