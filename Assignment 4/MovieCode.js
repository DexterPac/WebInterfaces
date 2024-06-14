var Movies = [] //movie array

//function to add movies to list
function AddMovie(event) {
    event.preventDefault()
    var TextMovieInput = document.getElementById("Movietext")
    var movietitle = TextMovieInput.value.trim()

    /*
    if(Movies.length >= 4)
    {
        alert("Up to 4 movies can be listed, please clear the current list if you want to add more")
    }
        */
    if(movietitle)
    {
        Movies.push(movietitle) //adds variable to movies array
        Movies.sort() //sorts array alphabetically
        TextMovieInput.value = "" //resets input value box
        UpdateMovies()
    }
}

//function called to actually update the movie list
function UpdateMovies() {
    var Movies2 = []

    var moviediv = document.getElementById("MovieList")

    for(var i = 0; i < Movies.length; i++)
    {
        Movies2.push("<div>" + Movies[i] + "</div>") //adds a new div wth the new movie
    }

    moviediv.innerHTML = Movies2.join('')
}

//function to clear movies list
function ClearList() {
    Movies = [] //makes movie array empty
    UpdateMovies()
}