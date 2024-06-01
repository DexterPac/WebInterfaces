window.onload = function setpageinfo() {

    ///////////////////////////////////////// collumns & rows
    document.getElementById("column1").style.display = "flex"
    document.getElementById("column1").style.position = "fixed"
    document.getElementById("column1").style.flexDirection = "column"
    document.getElementById("column1").style.backgroundColor = "#ca841a"
    document.getElementById("column1").style.padding = "5px"
    document.getElementById("column1").style.width = "100px"
    document.getElementById("column1").style.height = "1000px"
    document.getElementById("column1").style.float = "left"
    //document.getElementById("column1").style.top = "72px"
    document.getElementById("column1").style.top = "0"
    document.getElementById("column1").style.left = "0"

    document.getElementById("column2").style.display = "flex"
    document.getElementById("column2").style.position = "fixed"
    document.getElementById("column2").style.flexDirection = "column"
    document.getElementById("column2").style.backgroundColor = "#ca841a"
    document.getElementById("column2").style.padding = "5px"
    document.getElementById("column2").style.width = "100px"
    document.getElementById("column2").style.height = "1000px"
    document.getElementById("column2").style.float = "right"
    //document.getElementById("column2").style.top = "72px"
    document.getElementById("column2").style.top = "0"
    document.getElementById("column2").style.right = "0"

    document.getElementById("row1").style.background = "#5d1da5"
    document.getElementById("row1").style.position = "fixed"
    document.getElementById("row1").style.top = "0"
    document.getElementById("row1").style.left = "0"
    document.getElementById("row1").style.width = "100%"
    document.getElementById("row1").style.height = "40px"
    document.getElementById("row1").style.padding = "5px"
/////////////////////////////////////////

///////////////////////////////////////// main text
    document.getElementById("TheCenter").style.textAlign = "center"
    document.getElementById("TheCenter").style.position = "absolute" //fixed vs absolute --> fixed is ueful when you want to 
    //position something in its initial container (this wil most likely be the page itself/window page), while absolute is useful
    //when you want to position something in its current container (ex: if you position an object that is inside a div, it will 
    //position itself within the div's boundries)
    document.getElementById("TheCenter").style.width = "100%"

    document.getElementById("TheHeader").textContent = "KNOW ABOUT ME"
    document.getElementById("TheHeader").style.border = "thick solid #5d1da5" //can also use color words --> ex: "black"
    document.getElementById("TheHeader").style.color = "#ca841a"
    document.getElementById("TheHeader").style.background = "white"

    document.getElementById("TheName").textContent = "Dexter Paclebar"
    //element.style.fontFamily = family_name | generic_family | inherit | initia
    document.getElementById("TheName").style.fontFamily = "Comic Sans MS, Comic Sans, cursive"
    document.getElementById("TheName").style.color = "#5d1da5"
    document.getElementById("TheName").style.fontSize = "25px"
    document.getElementById("TheName").style.fontWeight = "Bold"
    document.getElementById("TheName").style.textDecoration = "underline #5d1da5"

    document.getElementById("TheMajor").textContent = "Advancing Computer Science"
    document.getElementById("TheMajor").style.fontFamily = "Comic Sans MS, Comic Sans, cursive"
    document.getElementById("TheMajor").style.color = "#ca841a"
    document.getElementById("TheMajor").style.lineHeight = "30px"


    document.getElementById("TheDate").textContent = "2026"
    document.getElementById("TheDate").style.fontFamily = "Comic Sans MS, Comic Sans, cursive"
    document.getElementById("TheDate").style.color = "#ca841a"
    document.getElementById("TheDate").style.lineHeight = "30px"

    document.getElementById("TheEmail").textContent = "Contact Information: dexpacle@uat.edu"
    document.getElementById("TheEmail").style.fontFamily = "Comic Sans MS, Comic Sans, cursive"
    document.getElementById("TheEmail").style.fontWeight = "bold"
    document.getElementById("TheEmail").style.color = "white"
    document.getElementById("TheEmail").style.lineHeight = "30px"
    document.getElementById("TheEmail").style.background = "#5d1da5"
    document.getElementById("TheEmail").style.position = "fixed"
    document.getElementById("TheEmail").style.bottom = "0"
    document.getElementById("TheEmail").style.left = "0"
    document.getElementById("TheEmail").style.width = "100%"
/////////////////////////////////////////
    
    
}