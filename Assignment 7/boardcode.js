var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(e){ // declare a function that updates the state
    elementIsClicked = true;
    let part = e.target
    for(let i = 0; i < piece.length; i++)
    {
        if(part == piece[i].PIECE)
        {
            //alert("WE GOING")
            clickedpiece = piece[i]
            selectedpiece = true;
            return
        }
    }

    //pointer to current cell clicked on
    var boardpointer
    for(let b = 0; b < 8; b++)
    {
        for(let k = 0; k < 8; k++)
        {
            if(localboard[b][k].CELL == part)
            {
                //alert("RAAAAAR")
                boardpointer = localboard[b][k]
                break;
            }
        }
    }


    if(selectedpiece)
    {
        //alert("yasasasas")
        if(clickedpiece.Color == "RED")//if there is an available space where you are clicking
        {
            //alert(selectedpiece.COLUMN)
            if(boardpointer.ROW == clickedpiece.ROW - 1 || boardpointer.ROW == clickedpiece.ROW + 1)
            {
                if(boardpointer.COLUMN == clickedpiece.COLUMN + 1)
                {  
                    for(let k = 0; k < piece.length; k++) //this is to ensure pieces cannot go onto a cell that another piece is already on
                    {
                        if(piece[k].COLUMN != boardpointer.COLUMN && piece[k].ROW != boardpointer.ROW) //if there is nothing there
                        {
                            selectedpiece2 = true
                        }
                        else if(piece[k].COLUMN == boardpointer.COLUMN && piece[k].ROW == boardpointer.ROW)//if there is something
                        {
                            selectedpiece2 = false
                            piecepointer = piece[k]
                            break;
                        }
                    }
                }
            }
        }
        else if(clickedpiece.Color == "GREEN")//if there is an available space where you are clicking
        {
            if(boardpointer.ROW == clickedpiece.ROW - 1 || boardpointer.ROW == clickedpiece.ROW + 1)
            {
                if(boardpointer.COLUMN == clickedpiece.COLUMN - 1)
                {        
                    for(let k = 0; k < piece.length; k++) //this is to ensure pieces cannot go onto a cell that another piece is already on
                    {
                        if(piece[k].COLUMN != boardpointer.COLUMN && piece[k].ROW != boardpointer.ROW)//if there is something
                        {
                            selectedpiece2 = true
                        }
                        else if(piece[k].COLUMN == boardpointer.COLUMN && piece[k].ROW == boardpointer.ROW)//if there is something
                        {
                            selectedpiece2 = false
                            piecepointer = piece[k]
                            break;
                        }
                    }
                }
            }
        }
    }

    if(selectedpiece2)
    {
        movepiece()
    }
    else if(!selectedpiece2)
    {
        movepiece2()
    }

    //basic piece moving
    function movepiece() {
        for(let i = 0; i < piece.length; i++)
        {
            if(clickedpiece == piece[i])
            {           
                    if(boardpointer.CELL == part)
                    {
                        //alert("RAAAAAR")
                        piece[i].COLUMN = boardpointer.COLUMN
                        piece[i].ROW = boardpointer.ROW
                    }
                        
                    //updates piece data, then removes piece then readds it
                    var gary = piece[i]
                    var currpiece = piece[i].PIECE
                    currpiece.remove()
                    board[gary.COLUMN][gary.ROW].append(gary.PIECE)
                    

                    selectedpiece = false
                    selectedpiece2 = false
                    clickedpiece = null
                    break;
                
            }
        }
    }

    //moves and destroys pieces
    function movepiece2() {
        for(let i = 0; i < piece.length; i++)
        {
            if(clickedpiece == piece[i])
            {           
                if(clickedpiece.Color == "RED")
                {
                    if(clickedpiece.ROW == boardpointer.ROW + 1 && clickedpiece.COLUMN == boardpointer.COLUMN - 1) //if top right of selected square
                    {            
                        for(let k = 0; k < piece.length; k++) 
                        {
                            if(piece[k] == piecepointer && piecepointer.Color != "RED") //prevent from destroying same color
                            {
                                if(piece[k].COLUMN != boardpointer.COLUMN + 1 && piece[k].ROW != boardpointer.ROW - 1) //if there is nothing there
                                {
                                    let part2 = localboard[boardpointer.COLUMN + 1][boardpointer.ROW - 1]
                                    piece[i].COLUMN = part2.COLUMN
                                    piece[i].ROW = part2.ROW
                                         
                                    
                                    var gary = piece[i]
                                    var currpiece = piece[i].PIECE
                                    currpiece.remove()
                                    board[gary.COLUMN][gary.ROW].append(gary.PIECE)
                                    let ptpointer = piecepointer.PIECE
                                    ptpointer.remove()      

                                    piece.splice(k, 1)//removes of piece listing
                                    
                
                                    selectedpiece = false
                                    selectedpiece2 = false
                                    clickedpiece = null
                                    piecepointer = null
                                    break;
                                }
                                else if(piece[k].COLUMN == boardpointer.COLUMN + 1 && piece[k].ROW == boardpointer.ROW - 1)
                                {
                                    break;
                                }
                            }
                        }                     
                    }
                    else if(clickedpiece.ROW == boardpointer.ROW - 1 && clickedpiece.COLUMN == boardpointer.COLUMN - 1) //if top left of selected square
                    {            
                        for(let k = 0; k < piece.length; k++) 
                        {
                            if(piece[k] == piecepointer && piecepointer.Color != "RED")
                            {
                                if(piece[k].COLUMN != boardpointer.COLUMN + 1 && piece[k].ROW != boardpointer.ROW + 1) //if there is nothing there
                                {
                                    let part2 = localboard[boardpointer.COLUMN + 1][boardpointer.ROW + 1]
                                    piece[i].COLUMN = part2.COLUMN
                                    piece[i].ROW = part2.ROW
                                        
                                    
                                    var gary = piece[i]
                                    var currpiece = piece[i].PIECE
                                    currpiece.remove()
                                    board[gary.COLUMN][gary.ROW].append(gary.PIECE)
                                    let ptpointer = piecepointer.PIECE
                                    ptpointer.remove()      

                                    piece.splice(k, 1)
                                    
                
                                    selectedpiece = false
                                    selectedpiece2 = false
                                    clickedpiece = null
                                    piecepointer = null
                                    break;
                                }
                                else if(piece[k].COLUMN == boardpointer.COLUMN + 1 && piece[k].ROW == boardpointer.ROW + 1)
                                {
                                    break;
                                }
                            }
                        }                     
                    }

                    selectedpiece = false
                    selectedpiece2 = false
                    clickedpiece = null
                    piecepointer = null
                    break;
                }
                else if(clickedpiece.Color == "GREEN")
                {
                    if(clickedpiece.ROW == boardpointer.ROW - 1 && clickedpiece.COLUMN == boardpointer.COLUMN + 1) //if bottom left of selected square
                    {            
                        for(let k = 0; k < piece.length; k++) 
                        {
                            if(piece[k] == piecepointer && piecepointer.Color != "GREEN")
                            {
                                if(piece[k].COLUMN != boardpointer.COLUMN - 1 && piece[k].ROW != boardpointer.ROW + 1) //if there is nothing there
                                {
                                    let part2 = localboard[boardpointer.COLUMN - 1][boardpointer.ROW + 1]
                                    piece[i].COLUMN = part2.COLUMN
                                    piece[i].ROW = part2.ROW
                                        
                                    
                                    var gary = piece[i]
                                    var currpiece = piece[i].PIECE
                                    currpiece.remove()
                                    board[gary.COLUMN][gary.ROW].append(gary.PIECE)
                                    let ptpointer = piecepointer.PIECE
                                    ptpointer.remove()      

                                    piece.splice(k, 1)
               
                                    selectedpiece = false
                                    selectedpiece2 = false
                                    clickedpiece = null
                                    piecepointer = null
                                    break;
                                }
                                else if(piece[k].COLUMN == boardpointer.COLUMN - 1 && piece[k].ROW == boardpointer.ROW + 1)
                                {
                                    break;
                                }
                            }
                        }                     
                    }
                    else if(clickedpiece.ROW == boardpointer.ROW + 1 && clickedpiece.COLUMN == boardpointer.COLUMN + 1) //if bottom right of selected square
                    {            
                        for(let k = 0; k < piece.length; k++) 
                        {
                            if(piece[k] == piecepointer && piecepointer.Color != "GREEN")
                            {
                                if(piece[k].COLUMN != boardpointer.COLUMN - 1 && piece[k].ROW != boardpointer.ROW - 1) //if there is nothing there
                                {
                                    let part2 = localboard[boardpointer.COLUMN - 1][boardpointer.ROW - 1]
                                    piece[i].COLUMN = part2.COLUMN
                                    piece[i].ROW = part2.ROW
                                        
                                    
                                    var gary = piece[i]
                                    var currpiece = piece[i].PIECE
                                    currpiece.remove()
                                    board[gary.COLUMN][gary.ROW].append(gary.PIECE)
                                    let ptpointer = piecepointer.PIECE
                                    ptpointer.remove()      

                                    piece.splice(k, 1)
                                    
                
                                    selectedpiece = false
                                    selectedpiece2 = false
                                    clickedpiece = null
                                    piecepointer = null
                                    break;
                                }
                                else if(piece[k].COLUMN == boardpointer.COLUMN - 1 && piece[k].ROW == boardpointer.ROW - 1)
                                {
                                    break;
                                }
                            }
                        }                     
                    }

                    selectedpiece = false
                    selectedpiece2 = false
                    clickedpiece = null
                    piecepointer = null
                    break;
                }
            } 
        }
    }

}

var selectedpiece = false;
var selectedpiece2 = false;
var clickedpiece
var piecepointer
//create element for table to be created in 
var center = document.createElement('center'); 
var board = []
board.length = 8
for(let i = 0; i < 8; i++)
{
    board[i] = new Array(8); //now creats an 8x8 board
}
var localboard = []
for(let i = 0; i < 8; i++)
{
    localboard[i] = new Array(8); //now creats an 8x8 board
}
var piece = []



  
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
            td.addEventListener('click', clickHandler);
            tr.appendChild(td); 
        } 
  
        // If the sum of cell coordinates is odd then 
        // color the cell black 
        else { 
  
            // Create a class attribute for all black cells 
            td.setAttribute('class', 'cell blackcell'); //will be modefied with css
            td.addEventListener('click', clickHandler);
  
            // Append the cell to its row 
            tr.appendChild(td); 
        } 
        board[i][j] = td;
        localboard[i][j] = {CELL: td, COLUMN: i, ROW: j};
        
    } 
  
    // Append the row 
    ChessTable.appendChild(tr); 
} 

for(let d = 0; d < board.length; d++)
{
    for(let m = 0; m < board[d].length; m++)
    {
        if(d == 0 || d == 1)
        {
            var mut = document.createElement('span')
            mut.setAttribute('class',"reddot")
            mut.addEventListener('click', clickHandler);
            var size = (piece.length).toString();
            mut.setAttribute('id',size)
            piece.push({PIECE: mut,COLUMN: d, ROW: m,Color: "RED"})
            board[d][m].append(mut)
        }
        else if(d == 6 || d == 7)
        {
            var mut = document.createElement('span')
            mut.setAttribute('class',"greendot")
            mut.addEventListener('click', clickHandler);
            var size = (piece.length).toString();
            mut.setAttribute('id',size)
            piece.push({PIECE: mut,COLUMN: d, ROW: m,Color: "GREEN"})
            board[d][m].append(mut)
        }
    }
}


center.appendChild(ChessTable); 
center.setAttribute('id',"thecenter") //add id to "thecenter"
  
// Modifying table attribute properties 
ChessTable.setAttribute('cellspacing', '0'); 
document.body.appendChild(center);