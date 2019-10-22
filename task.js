var rIndex,table=document.getElementById("table");


function addrow()
{
   // var table=document.getElementById("table");
    var newrow=table.insertRow(table.length);
    
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);

    var button=document.createElement("button");
    var text=document.createTextNode("delete");

    button.setAttribute("class","front");
    button.setAttribute("id","tdel");
    // button.setAttribute('onclick','removeRow(this)');
    button.addEventListener("click",function()
    {
        var i=this.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i);
    });



    button.appendChild(text);
    newrow.appendChild(button);
    table.appendChild(newrow);


    var button1=document.createElement("button");
    var text=document.createTextNode("Update");
    button1.setAttribute("class","front1");
    button1.setAttribute("id","front1");
    button1.setAttribute('onclick','editrow()');

    button1.appendChild(text);
    newrow.appendChild(button1);
    table.appendChild(newrow);





    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var age=document.getElementById("age").value;

        cell1.innerHTML=fname;
        cell2.innerHTML=lname;
        cell3.innerHTML=age;

     selectrow();
}

// var rIndex=null;
function selectrow()
{
    // var rIndex, table=document.getElementById("table");
    for(var i=1; i <table.rows.length; i++)
    {
        table.rows[i].onclick=function()
        {
             rIndex=this.rowIndex;   
            // console.log(rIndex);
             document.getElementById("fname").value=this.cells[0].innerHTML;
             document.getElementById("lname").value=this.cells[1].innerHTML;
             document.getElementById("age").value=this.cells[2].innerHTML;
        };
        // tab.rows[rIndex]
    }
} 
selectrow();



function editrow()
{
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var age=document.getElementById("age").value;
    table.rows[rIndex].cells[0].innerHTML=fname;
    table.rows[rIndex].cells[1].innerHTML=lname;
    table.rows[rIndex].cells[2].innerHTML=age;

}

// function removeRow(oButton)
// {
//     var table=document.getElementById("table");
//  table.deleteRow(oButton.parentNode.parentNode.rowIndex);

// }

function deleterow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}
