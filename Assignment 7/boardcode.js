//create element for table to be created in 
var center = document.createElement('center'); 
  
// Create a table element 
var ChessTable = document.createElement('table'); 
center.setAttribute('id',"chesstable") //add id to the table
for (var i = 0; i < 8; i++) { 
  
    // Create a row 
    var tr = document.createElement('tr'); //add a row
    for (var j = 0; j < 8; j++) { 
  
        // Create a cell 
        var td = document.createElement('td');  //add a cell
  
        // If the sum of cell coordinates is even 
        // then color the cell white 
        if ((i + j) % 2 == 0) {  //basicaly every other tile/cell
  
            // Create a class attribute for all white cells 
            td.setAttribute('class', 'cell whitecell'); //will be modefied with css
            tr.appendChild(td); 
        } 
  
        // If the sum of cell coordinates is odd then 
        // color the cell black 
        else { 
  
            // Create a class attribute for all black cells 
            td.setAttribute('class', 'cell blackcell'); //will be modefied with css
  
            // Append the cell to its row 
            tr.appendChild(td); 
        } 
    } 
  
    // Append the row 
    ChessTable.appendChild(tr); 
} 
center.appendChild(ChessTable); 
center.setAttribute('id',"thecenter") //add id to "thecenter"
  
// Modifying table attribute properties 
ChessTable.setAttribute('cellspacing', '0'); 
document.body.appendChild(center);