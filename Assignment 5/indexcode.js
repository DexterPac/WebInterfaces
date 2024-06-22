var Players = [] 


function AddPlayer(event) {
    event.preventDefault()
    var TextUsernameInput = document.getElementById("username")
    var isname = TextUsernameInput.value.trim()
    var TextWeaponsInput = document.getElementById("weapons")
    var isweapons = TextWeaponsInput.value.trim()

    var TextHealthInput = document.getElementById("health")
    var ishealth = TextHealthInput.value.trim()
    var TextPointsInput = document.getElementById("points")
    var ispoints = TextPointsInput.value.trim()

    if(isname && isweapons && ishealth && ispoints)
    {
        var playerdata = [isname," " + isweapons," " +  ishealth," " +  ispoints];
        Players.push(playerdata) //adds variable to movies array
        Players.sort() //sorts array alphabetically
        TextUsernameInput.value = "" //resets input value box
        TextWeaponsInput.value = ""
        TextHealthInput.value = "";
        TextPointsInput.value = "";
        UpdatePlayer()
    }
}

function UpdatePlayer() {
    var Player2 = []

    var playerdiv = document.getElementById("PlayerList")

    for(var i = 0; i < Players.length; i++)
    {
        Player2.push("<div>" + "<br>" + Players[i].toString() + "</div>") //adds a new div wth the new movie
    }

    playerdiv.innerHTML = Player2.join('')
}

function ClearList() {
    Players = [] //makes movie array empty
    UpdatePlayer()
}