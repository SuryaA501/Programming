var array=[];
var j=0;
var head=true;

function action()
{
    if(validation())
    {
        var user=document.getElementById("us").value;
        var pass=document.getElementById("ps").value;
        var num=document.getElementById("mn").value;
        var mail=document.getElementById("mail").value;

         json={
            us:user,
            ps:pass,
            number:num,
            mailid:mail
        }
    

      array.push(json);
      var table=document.getElementById("display");

      for(i=0;i<array.length;i++)
      {
          var row=document.createElement("tr");
          if(head)
          {
          for(var once in array[i])
          {
            var col=document.createElement("th");
            var coldata=document.createTextNode(Object.keys(array[i])[j]);
            col.appendChild(coldata);
          row.appendChild(col);
            j++;
          }
          head=false;
         
          table.appendChild(row);
         }
    

      var row=document.createElement("tr");
          for(var every in array[i])
          {
              var col=document.createElement("td");
              var coldata=document.createTextNode(array[i][every]);
              col.appendChild(coldata);
              row.appendChild(col);
             
          }
         
          table.appendChild(row);
      


    }
    array=[];
}
}