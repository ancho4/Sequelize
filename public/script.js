async function windowActions() {
  const request = await fetch('/api/dining');
  const data = await request.json(); 


  //select table
  const target = document.querySelector("tbody")
  const table_row
  // for each element in data
   // const table_row = document.createElement("tr")
  for (i = 0; i < data.length; i++) {
    console.log("hello")
   
  }
  table_row.innerHTML = "<td>hello</td>"
  target.append(table_row)
  

 
  


 
    
 

}


window.onload = windowActions

